import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CurrencyEnum, MATH } from '@common_bot/shared';
import { logger } from '../../libs/logger/logger.instance';
import { UserService } from '../user/user.service';
import { TaskService } from '../task/task.service';
import { WalletService } from '../wallet/wallet.service';
import { NotificationService } from '../notification/notification.service';
import { MiningEntity as Mining } from './mining.entity';
import { MiningCreateDto, MiningUpdateDto } from './dto';

const { getMinedTokenAmount } = MATH;

const findOne = (wallet_repository: Repository<Mining>, id: string) => wallet_repository
  .findOneBy({ id });

@Injectable()
export class MiningService {
  constructor(
    @Inject(forwardRef(() => TaskService))
    private readonly taskService: TaskService,
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly notificationService: NotificationService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneMining(id: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const mining_repository = manager.getRepository(Mining);

        return findOne(mining_repository, id);
      });
    } catch (error) {
      logger.error('MiningService | getOneMining | ERROR:\n', error);
      throw new Error('Error with service callback: getOneMining');
    }
  }

  async createMining({ id, tasks }: MiningCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const mining_repository = manager.getRepository(Mining);

        // TODO Подумать над выбросом ошибки в случае если маининг создан
        const mining_in_db = await findOne(mining_repository, id);

        if (mining_in_db) {
          return mining_in_db;
        }

        // Записываем информацию о выполненных заданиях
        await this.taskService.completeTasks({ user_id: id, tasks });

        // Сохраняем информацию о маининге для юзера
        return mining_repository.save({ id, ton_started: new Date() });
      });
    } catch (error) {
      logger.error('MiningService | createMining | ERROR:\n', error);
      throw new Error('Error with service callback: createMining');
    }
  }

  async createMiningWithReferral({ id, tasks, who_invited_id }: MiningCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const mining_repository = manager.getRepository(Mining);

        // TODO Подумать над выбросом ошибки в случае если маининг создан
        const mining_in_db = await findOne(mining_repository, id);

        if (mining_in_db) {
          return mining_in_db;
        }

        // TODO заменить на короткую проверку
        const referral_user = await this.userService.isExisting(who_invited_id);

        if (referral_user) {
          // Начисляем бонус тому кто пригласил
          await this.walletService.updateWallet({
            id: who_invited_id,
            operation: 'increase',
            amount: '0.01',
            currency: CurrencyEnum.TON,
          });

          // Начисляем бонус тому кто был приглашен и активировал маининг
          await this.walletService.updateWallet({
            id,
            operation: 'increase',
            amount: '0.005',
            currency: CurrencyEnum.TON,
          });

          // Отправляем уведомление о регистрации нового юзера

          const { username, firstname } = await this.userService.getName(id);

          this.notificationService.newReferralActivated(who_invited_id, username, firstname);
        }

        // Записываем информацию о выполненных заданиях
        await this.taskService.completeTasks({ user_id: id, tasks });

        // Сохраняем информацию о маининге для юзера
        return mining_repository.save({ id, ton_started: new Date() });
      });
    } catch (error) {
      logger.error('MiningService | createMiningWithReferral | ERROR:\n', error);
      throw new Error('Error with service callback: createMiningWithReferral');
    }
  }

  async updateMining({
    id, currency, mining_rate, started,
  }: MiningUpdateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const mining_repository = manager.getRepository(Mining);

        const mining_in_db = await findOne(mining_repository, id);

        if (!mining_in_db) {
          return mining_in_db;
        }

        /*
          Перегнать намайненное в баланс,
          если пришла обновленная дата начала майнига по данному рейту
        */
        if (started) {
          // Вычисляем заработанные деньги
          const earned = getMinedTokenAmount(
            mining_in_db[`${currency}_rate`],
            mining_in_db[`${currency}_started`],
          );

          // Начисляем их в кошелек
          await this.walletService.updateWallet({
            id,
            currency,
            operation: 'increase',
            amount: earned,
          });

          // Обновляем дату маининга
          await mining_repository.update({ id }, { [`${currency}_started`]: started });
        }

        if (mining_rate) {
          // Увеличиваем ставку маининга
          await mining_repository.increment({ id }, `${currency}_rate`, mining_rate);
        }

        return findOne(mining_repository, id);
      });
    } catch (error) {
      logger.error('MiningService | updateMining | ERROR:\n', error);
      throw new Error('Error with service callback: updateMining');
    }
  }
}
