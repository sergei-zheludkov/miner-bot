import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CurrencyEnum, DATE, RoleEnum } from '@common_bot/shared';
import {
  DataSource,
  Not,
  And,
  IsNull,
  Between,
  MoreThan,
} from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { WalletService } from '../wallet/wallet.service';
import { UserEntity as User } from './user.entity';
import { findOne, getLeadersDataCallback } from './helpers';
import { SHORT_USER_SELECT } from './constants';
import { RawLeadersData } from './types';
import {
  ShortUserReadDto,
  StatisticsReadDto,
  UserCreateDto,
  UserUpdateDto,
} from './dto';

const {
  getStartToday,
  getStartYesterday,
  getStartWeek,
  getStartMonth,
} = DATE;

@Injectable()
export class UserService {
  constructor(
    private readonly walletService: WalletService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneUser(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);

      return findOne(users_repository, id);
    });
  }

  async createUser(data: UserCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в случае если юзер создан
        const { id } = data;
        const user_in_db = await findOne(users_repository, id);

        if (user_in_db) {
          return user_in_db;
        }

        // Создаем кошелек для нового юзера
        await this.walletService.createWallet({ id, amount: 0, currency: CurrencyEnum.TON });

        // Сохраняем юзера
        return users_repository.save(data);
      });
    } catch (error) {
      logger.error('UserService(createUser):', error);

      throw new Error();
    }
  }

  async createUserWithReferral(data: UserCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        // TODO Подумать над выбросом ошибки в этом случае
        const { id } = data;
        const user_in_db = await findOne(users_repository, id);

        if (user_in_db) {
          return user_in_db;
        }

        const { who_invited_id, ...other_data } = data;
        const referral_user = await findOne(users_repository, who_invited_id);

        if (referral_user) {
          await users_repository.increment({ id: who_invited_id }, 'referral_counter', 1);

          // Создаем кошелек с бонусом для нового юзера
          await this.walletService.createWallet({ id, amount: 0, currency: CurrencyEnum.TON });

          // Сохраняем юзера
          await users_repository.save(data);
        } else {
          await users_repository.save(other_data);
          // TODO обращение к API бота, для оповещения юзера что такого рефералла нет
          // const { firstname, lastname } = user;
          // this.httpService.post();
        }

        return findOne(users_repository, id);
      });
    } catch (error) {
      logger.error('UserService(createUserWithReferral):', error);

      throw new Error();
    }
  }

  async updateUser(user_data: UserUpdateDto) {
    const { id, increase_completed_tasks_count, ...data } = user_data;

    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        const user_in_db = await findOne(users_repository, id);

        if (!user_in_db) {
          return user_in_db;
        }

        if (increase_completed_tasks_count) {
          await users_repository.increment({ id }, 'completed_tasks_count', increase_completed_tasks_count);
        }

        await users_repository.update({ id }, data);

        return findOne(users_repository, id);
      });
    } catch (error) {
      logger.error('UserService(updateUser):', error);

      throw new Error();
    }
  }

  isExisting(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);

      return users_repository.existsBy({ id });
    });
  }

  getNickname(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);

      return users_repository.findOne({ where: { id }, select: ['id', 'username'] });
    });
  }

  getReferralCounter(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);

      return users_repository.findOne({ where: { id }, select: ['id', 'referral_counter'] });
    });
  }

  async getStatistics(): Promise<StatisticsReadDto> {
    return this.dataSource.transaction(async (manager) => {
      const users_repository = manager.getRepository(User);

      const todayStart = getStartToday().toDate();
      const yesterdayStart = getStartYesterday().toDate();
      const weekStart = getStartWeek().toDate();
      const monthStart = getStartMonth().toDate();
      const sevenDaysAgo = getStartToday().subtract(7, 'day').toDate();
      const thirtyDaysAgo = getStartToday().subtract(30, 'day').toDate();

      const all_time = await users_repository.count();
      const today = await users_repository.countBy({
        created: MoreThan(todayStart),
      });
      const yesterday = await users_repository.countBy({
        created: Between(yesterdayStart, todayStart),
      });
      const last_7_days = await users_repository.countBy({
        created: MoreThan(sevenDaysAgo),
      });
      const last_30_days = await users_repository.countBy({
        created: MoreThan(thirtyDaysAgo),
      });
      const this_week = await users_repository.countBy({
        created: MoreThan(weekStart),
      });
      const this_month = await users_repository.countBy({
        created: MoreThan(monthStart),
      });

      return {
        today,
        yesterday,
        last_7_days,
        last_30_days,
        this_week,
        this_month,
        all_time,
      };
    });
  }

  async getLeaders(date?: Date): Promise<ShortUserReadDto[]> {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        if (!date) {
          return users_repository.find({
            where: { role: RoleEnum.USER, referral_counter: MoreThan(0) },
            select: { ...SHORT_USER_SELECT, referral_counter: true },
            order: { referral_counter: 'DESC', firstname: 'DESC' },
            take: 10,
          });
        }

        const exceptions = (await users_repository.find({ where: { role: Not(RoleEnum.USER) }, select: ['id'] }))
          .map(({ id }) => Not(id))
          .concat(Not(IsNull()));

        return Promise.all(
          (await users_repository
            .createQueryBuilder('user')
            .select(['who_invited_id AS id', 'COUNT(*) AS referral_counter'])
            .where({
              who_invited_id: And(...exceptions),
              created: MoreThan(date),
            })
            .groupBy('who_invited_id')
            .orderBy('referral_counter', 'DESC')
            .limit(10)
            .getRawMany<RawLeadersData>())
            .map(getLeadersDataCallback(users_repository)),
        );
      });
    } catch (error) {
      logger.error('UserCronService(startReminder):', error);
      throw new Error('Error with User Cron');
    }
  }
}
