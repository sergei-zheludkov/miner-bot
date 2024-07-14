import { WithdrawalStatusEnum } from '@common_bot/shared';
import type { ReactNode } from 'react';
import type { WithdrawalEntity } from '@common_bot/api';

export type ContextState = {
  withdrawals: Array<WithdrawalEntity>;
}

export type ProviderProps = {
  children: ReactNode;
  status?: WithdrawalStatusEnum;
  userId?: string;
  sort?: 'ASC' | 'DESC';
};
