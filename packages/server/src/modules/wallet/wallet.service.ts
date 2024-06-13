import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { WalletEntity as Wallet } from './wallet.entity';
import { WalletCreateDto, WalletUpdateDto } from './dto';

const findOne = (wallet_repository: Repository<Wallet>, id: string) => wallet_repository
  .findOneBy({ id });

@Injectable()
export class WalletService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async createWallet(data: WalletCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const wallet_repository = manager.getRepository(Wallet);

        // TODO Подумать над выбросом ошибки в случае если кошелек создан
        const { id } = data;
        const wallet_in_db = await findOne(wallet_repository, id);

        if (wallet_in_db) {
          return wallet_in_db;
        }

        const new_wallet = wallet_repository.create(data);

        return wallet_repository.save(new_wallet);
      });
    } catch (error) {
      logger.error('WalletService(createWallet):', error);

      throw new Error();
    }
  }

  async updateWallet(data: WalletUpdateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const wallet_repository = manager.getRepository(Wallet);

        const { id, ton, operation } = data;

        if (ton && operation === 'increase') {
          await wallet_repository.increment({ id }, 'ton', ton);
        }

        if (ton && operation === 'decrease') {
          await wallet_repository.decrement({ id }, 'ton', ton);
        }

        return findOne(wallet_repository, id);
      });
    } catch (error) {
      logger.error('WalletService(updateWallet):', error);

      throw new Error();
    }
  }
}
