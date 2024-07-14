import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { WalletService } from '../wallet/wallet.service';
import { WithdrawalEntity as Withdrawal } from './withdrawal.entity';
import { WithdrawalCreateDto, WithdrawalsReadDto, WithdrawalUpdateDto } from './dto';
import type { GetQuery } from './types';

const findOne = (withdrawal_repository: Repository<Withdrawal>, id: number) => withdrawal_repository
  .findOne({ where: { id }, relations: ['user'] });

const getWithdrawalsWhere = ({ user_id, status }: Partial<GetQuery>) => ({
  ...(user_id ? { user: { id: user_id } } : {}),
  ...(status ? { status } : {}),
});

@Injectable()
export class WithdrawalService {
  constructor(
    private readonly walletService: WalletService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneWithdrawal(id: number) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const withdrawal_repository = manager.getRepository(Withdrawal);

        return findOne(withdrawal_repository, id);
      });
    } catch (error) {
      logger.error('WithdrawalService | getOneWithdrawal | ERROR:\n', error);
      throw new Error('Error with service callback: getOneWithdrawal');
    }
  }

  getWithdrawals({
    user_id, status, limit, offset, sort,
  }: GetQuery): Promise<WithdrawalsReadDto> {
    try {
      return this.dataSource.transaction(async (manager) => {
        const withdrawal_repository = manager.getRepository(Withdrawal);

        const count = await withdrawal_repository.countBy({ status });
        const remain_count = (count - limit) < 0 ? 0 : count - limit;

        const where = getWithdrawalsWhere({ status, user_id });

        const withdrawals = await withdrawal_repository
          .createQueryBuilder('withdrawal')
          .leftJoinAndSelect('withdrawal.user', 'user')
          .where(where)
          .take(limit)
          .skip(offset)
          .orderBy('withdrawal.created', sort)
          .getMany();

        return { withdrawals, remain_count }; // [withdrawals, count - limit];
      });
    } catch (error) {
      logger.error('WithdrawalService | getWithdrawals | ERROR:\n', error);
      throw new Error('Error with service callback: getWithdrawals');
    }
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
      logger.error('WithdrawalService | createWithdrawal | ERROR:\n', error);
      throw new Error('Error with service callback: createWithdrawal');
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
      logger.error('WithdrawalService | updateWithdrawal | ERROR:\n', error);
      throw new Error('Error with service callback: updateWithdrawal');
    }
  }
}
