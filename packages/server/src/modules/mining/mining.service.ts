import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { MATH } from '@common_bot/shared';
import { logger } from '../../libs/logger/logger.instance';
import { MiningEntity as Mining } from './mining.entity';
import { MiningCreateDto, MiningUpdateDto } from './dto';
import { WalletService } from '../wallet/wallet.service';

const { getMinedTokenAmount } = MATH;

const findOne = (wallet_repository: Repository<Mining>, id: string) => wallet_repository
  .findOneBy({ id });

@Injectable()
export class MiningService {
  constructor(
    private readonly walletService: WalletService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async createMining(data: MiningCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const mining_repository = manager.getRepository(Mining);

        // TODO Подумать над выбросом ошибки в случае если маининг создан
        const { id } = data;
        const mining_in_db = await findOne(mining_repository, id);

        if (mining_in_db) {
          return mining_in_db;
        }

        const new_mining = mining_repository.create(data);

        return mining_repository.save(new_mining);
      });
    } catch (error) {
      logger.error('MiningService(createMining):', error);

      throw new Error();
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
          await mining_repository.update(
            { id },
            { [`${currency}_started`]: started },
          );
        }

        if (mining_rate) {
          // Увеличиваем ставку маининга
          await mining_repository.increment({ id }, `${currency}_rate`, mining_rate);
        }

        return findOne(mining_repository, id);
      });
    } catch (error) {
      logger.error('MiningService(updateMining):', error);

      throw new Error();
    }
  }
}
