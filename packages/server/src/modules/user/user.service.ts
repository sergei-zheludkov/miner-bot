import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  CountriesEnum, CurrencyEnum, DATE, GenderEnum, RoleEnum,
} from '@common_bot/shared';
import {
  And, Between, DataSource, IsNull, MoreThan, Not,
} from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { WalletService } from '../wallet/wallet.service';
import { ToggleService } from '../toggle/toggle.service';
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
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly walletService: WalletService,
    private readonly toggleService: ToggleService,
  ) {}

  getOneUserAndToggles(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        const user = await findOne(users_repository, id);
        const toggles = await this.toggleService.getToggles();

        return { user, toggles };
      });
    } catch (error) {
      logger.error('UserService | getOneUserAndToggles | ERROR:\n', error);
      throw new Error('Error with service callback: getOneUserAndToggles');
    }
  }

  getOneUser(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        return findOne(users_repository, id);
      });
    } catch (error) {
      logger.error('UserService | getOneUser | ERROR:\n', error);
      throw new Error('Error with service callback: getOneUser');
    }
  }

  getOneUserShort(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        return findOne(users_repository, id, SHORT_USER_SELECT);
      });
    } catch (error) {
      logger.error('UserService | getOneUserShort | ERROR:\n', error);
      throw new Error('Error with service callback: getOneUserShort');
    }
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
      logger.error('UserService | createUser | ERROR:\n', error);
      throw new Error('Error with service callback: createUser');
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
      logger.error('UserService | createUserWithReferral | ERROR:\n', error);
      throw new Error('Error with service callback: createUserWithReferral');
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
      logger.error('UserService | updateUser | ERROR:\n', error);
      throw new Error('Error with service callback: updateUser');
    }
  }

  isExisting(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        return users_repository.existsBy({ id });
      });
    } catch (error) {
      logger.error('UserService | isExisting | ERROR:\n', error);
      throw new Error('Error with service callback: isExisting');
    }
  }

  getName(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        return users_repository.findOne({ where: { id }, select: ['id', 'firstname', 'lastname', 'username'] });
      });
    } catch (error) {
      logger.error('UserService | getName | ERROR:\n', error);
      throw new Error('Error with service callback: getName');
    }
  }

  getReferralCounter(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        return users_repository.findOne({ where: { id }, select: ['id', 'referral_counter'] });
      });
    } catch (error) {
      logger.error('UserService | getReferralCounter | ERROR:\n', error);
      throw new Error('Error with service callback: getReferralCounter');
    }
  }

  async getStatistics(): Promise<StatisticsReadDto> {
    try {
      return this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        const todayStart = getStartToday().toDate();
        const yesterdayStart = getStartYesterday().toDate();
        const weekStart = getStartWeek().toDate();
        const monthStart = getStartMonth().toDate();
        const sevenDaysAgo = getStartToday().subtract(7, 'day').toDate();
        const thirtyDaysAgo = getStartToday().subtract(30, 'day').toDate();

        const all_time = await users_repository.count();
        const today = await users_repository.countBy({ created: MoreThan(todayStart) });
        // eslint-disable-next-line max-len
        const yesterday = await users_repository.countBy({ created: Between(yesterdayStart, todayStart) });
        const last_7_days = await users_repository.countBy({ created: MoreThan(sevenDaysAgo) });
        const last_30_days = await users_repository.countBy({ created: MoreThan(thirtyDaysAgo) });
        const this_week = await users_repository.countBy({ created: MoreThan(weekStart) });
        const this_month = await users_repository.countBy({ created: MoreThan(monthStart) });

        const male = await users_repository.countBy({ gender: GenderEnum.MALE });
        const female = await users_repository.countBy({ gender: GenderEnum.FEMALE });

        const RU = await users_repository.countBy({ country: CountriesEnum.RUSSIA });
        const UA = await users_repository.countBy({ country: CountriesEnum.UKRAINE });
        const KZ = await users_repository.countBy({ country: CountriesEnum.KAZAKHSTAN });
        const BY = await users_repository.countBy({ country: CountriesEnum.BELARUS });

        return {
          today,
          yesterday,
          last_7_days,
          last_30_days,
          this_week,
          this_month,
          all_time,
          countries: {
            RU, UA, KZ, BY,
          },
          genders: {
            male, female,
          },
        };
      });
    } catch (error) {
      logger.error('UserService | getStatistics | ERROR:\n', error);
      throw new Error('Error with service callback: getStatistics');
    }
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
      logger.error('UserService | getLeaders | ERROR:\n', error);
      throw new Error('Error with service callback: getLeaders');
    }
  }
}
