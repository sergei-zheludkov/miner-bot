import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CurrencyEnum, DATE } from '@common_bot/shared';
import { DataSource, Repository } from 'typeorm';
import { toPromise } from '../../helpers';
import { logger } from '../../libs/logger/logger.instance';
import { WalletService } from '../wallet/wallet.service';
import { MiningService } from '../mining/mining.service';
import { UserEntity as User } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

const { getFormattedDate } = DATE;

const findOne = (users_repository: Repository<User>, id: string) => users_repository
  .findOne({
    where: { id },
  });

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly walletService: WalletService,
    private readonly miningService: MiningService,
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

    try {
      /* const resp = */ await toPromise(data);
      // console.info(
      //   getFormattedDate(),
      //   `| User ID: ${userid}`,
      //   `| Username: ${username}`,
      //   `| URL: ${url}`,
      //   `| Resp: ${resp}`,
      // );
    } catch (error) {
      console.info(
        getFormattedDate(),
        `| User ID: ${userid}`,
        `| Username: ${username}`,
        `| URL: ${url}`,
        `| Error: ${error}`,
      );
    }
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

        // Создаем кошелек с бонусом для нового юзера
        await this.walletService.createWallet({
          id,
          amount: 0,
          currency: CurrencyEnum.TON,
        });

        // Создаем маининг для нового юзера
        await this.miningService.createMining({ id });

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

          // Начисляем бонус тому кто пригласил
          await this.walletService.updateWallet({
            id: who_invited_id,
            operation: 'increase',
            amount: 0.005,
            currency: CurrencyEnum.TON,
          });

          // Создаем кошелек с бонусом для нового юзера
          await this.walletService.createWallet({
            id,
            amount: 0.005,
            currency: CurrencyEnum.TON,
          });

          // Создаем маининг для нового юзера
          await this.miningService.createMining({ id });

          // Сохраняем юзера
          await users_repository.save(data);

          // Отправляем уведомление о регистрации нового юзера
          this.postNewReferralNotification(who_invited_id, data.username);
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
}
