import { WithdrawalStatusEnum } from '@common_bot/shared';
import type { ReactNode } from 'react';
import type { Fetch, WithdrawalsReadDto, WithdrawalEntity } from '@common_bot/api';

export type GetWithdrawalCallback = Fetch<never, WithdrawalsReadDto>;

export type ContextState = {
  withdrawals: Array<WithdrawalEntity>;

  isGetWithdrawalsCalled: boolean;
  isGetWithdrawalsLoading: boolean;
  isGetWithdrawalsSuccess: boolean;
  isGetWithdrawalsError: boolean;

  getWithdrawals: GetWithdrawalCallback;
}

export type ProviderProps = {
  children: ReactNode;
  status?: WithdrawalStatusEnum;
  userId?: string;
  sort?: 'ASC' | 'DESC';
};
