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

  async updateWallet({
    id, operation, ton_amount, ton_address,
  }: WalletUpdateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const wallet_repository = manager.getRepository(Wallet);

        if (ton_address) {
          await wallet_repository.update({ id }, { ton_address });
        }

        if (ton_amount && operation === 'increase') {
          await wallet_repository.increment({ id }, 'ton_amount', ton_amount);
        }

        if (ton_amount && operation === 'decrease') {
          await wallet_repository.decrement({ id }, 'ton_amount', ton_amount);
        }

        return findOne(wallet_repository, id);
      });
    } catch (error) {
      logger.error('WalletService(updateWallet):', error);

      throw new Error();
    }
  }
}
