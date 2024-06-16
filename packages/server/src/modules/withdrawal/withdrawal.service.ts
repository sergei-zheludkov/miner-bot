import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { WalletService } from '../wallet/wallet.service';
import { WithdrawalEntity as Withdrawal } from './withdrawal.entity';
import { WithdrawalCreateDto, WithdrawalUpdateDto } from './dto';
import type { GetQuery } from './types';

const findOne = (withdrawal_repository: Repository<Withdrawal>, id: number) => withdrawal_repository
  .findOne({ where: { id }, relations: ['user'] });

@Injectable()
export class WithdrawalService {
  constructor(
    private readonly walletService: WalletService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneWithdrawal(id: number) {
    return this.dataSource.transaction(async (manager) => {
      const withdrawal_repository = manager.getRepository(Withdrawal);

      return findOne(withdrawal_repository, id);
    });
  }

  getWithdrawals({ status, limit, offset }: GetQuery): Promise<[Array<Withdrawal>, number]> {
    return this.dataSource.transaction(async (manager) => {
      const withdrawal_repository = manager.getRepository(Withdrawal);

      const count = await withdrawal_repository.countBy({ status });

      const withdrawals = await withdrawal_repository
        .createQueryBuilder('withdrawal')
        .leftJoinAndSelect('withdrawal.user', 'user')
        .where({ status })
        .take(limit)
        .skip(offset)
        .orderBy('withdrawal.created', 'ASC')
        .getMany();

      return [withdrawals, count - limit];
    });
  }

  async createWithdrawal({ user_id, ...data }: WithdrawalCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const withdrawal_repository = manager.getRepository(Withdrawal);

        // Блокируем деньги в кошельке
        await this.walletService.updateWallet({
          ...data,
          id: user_id,
          operation: 'decrease',
        });

        const new_withdrawal_data = {
          ...data,
          user: user_id,
          wallet: user_id,
          amount: 0,
        };

        if (!Number.isNaN(data.amount)) {
          new_withdrawal_data.amount = Number(data.amount);
        }

        return withdrawal_repository.save(new_withdrawal_data);
      });
    } catch (error) {
      logger.error('WithdrawalService(createWithdrawal):', error);

      throw new Error();
    }
  }

  async updateWithdrawal({ id, status }: WithdrawalUpdateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const withdrawal_repository = manager.getRepository(Withdrawal);

        await withdrawal_repository.update({ id }, { status });

        return findOne(withdrawal_repository, id);
      });
    } catch (error) {
      logger.error('WithdrawalService(updateWithdrawal):', error);

      throw new Error();
    }
  }
}
