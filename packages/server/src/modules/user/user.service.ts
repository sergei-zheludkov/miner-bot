import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { MATH } from '@common_bot/shared';
import { DataSource, Repository } from 'typeorm';
import { toPromise } from '../../helpers';
import { logger } from '../../libs/logger/logger.instance';
import { UserEntity as User } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

const { getMinedTokenAmount } = MATH;

const findOne = (users_repository: Repository<User>, id: string) => users_repository
  .findOne({
    where: { id },
    relations: ['who_invited'],
  });

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  // TODO сделать отдельный сервис который будет посылать уведомления на сервер бота
  private async postNewReferralNotification(userid: string, username: string) {
    const url = `${this.configService.get('WEBHOOK_HOST_BASE')}notifications/referrals/new/${userid}`;

    const request = this.httpService.post(url, { username });

    const data = {
      request,
      logger_message: 'USER SERVICE [post new referral notification]',
      error_message: 'Something goes wrong',
    };

    toPromise(data);
  }

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

        const new_user = users_repository.create(data);

        return users_repository.save(new_user);
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

        const { who_invited_id: who_invited, ...other_data } = data;
        const referral_user = await findOne(users_repository, who_invited);

        if (referral_user) {
          await users_repository.increment({ id: who_invited }, 'referral_counter', 1);
          await users_repository.increment({ id: who_invited }, 'balance', 0.005);
          await users_repository.save({ ...other_data, who_invited, balance: 0.005 });

          this.postNewReferralNotification(who_invited, data.username);
        } else {
          await users_repository.save({ ...other_data, who_invited: null });
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
    const {
      id,
      increase_mining_rate,
      increase_complete_tasks_count,
      ...data
    } = user_data;

    try {
      return await this.dataSource.transaction(async (manager) => {
        const users_repository = manager.getRepository(User);

        const user_in_db = await findOne(users_repository, id);

        if (!user_in_db) {
          return user_in_db;
        }

        /*
          Перегнать намайненное в баланс,
          если пришла обновленная дата начала майнига по данному рейту
        */
        if (data.mining_rate_started) {
          const earned = getMinedTokenAmount(
            user_in_db.mining_rate,
            user_in_db.mining_rate_started,
          );

          await users_repository.increment({ id }, 'balance', earned);
        }

        if (increase_mining_rate) {
          await users_repository.increment({ id }, 'mining_rate', increase_mining_rate);
        }

        if (increase_complete_tasks_count) {
          await users_repository.increment({ id }, 'complete_tasks_count', increase_complete_tasks_count);
        }

        await users_repository.update({ id }, data);

        return findOne(users_repository, id);
      });
    } catch (error) {
      logger.error('UserService(updateUser):', error);

      throw new Error();
    }
  }
}
