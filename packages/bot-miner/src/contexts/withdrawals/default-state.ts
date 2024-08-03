import { UTILITIES } from '@common_bot/shared';
import type { ContextState, GetWithdrawalCallback } from './types';

const { asyncEmpty } = UTILITIES;

export const defaultState: ContextState = {
  withdrawals: [],

  isGetWithdrawalsCalled: false,
  isGetWithdrawalsLoading: false,
  isGetWithdrawalsSuccess: false,
  isGetWithdrawalsError: false,

  getWithdrawals: asyncEmpty as unknown as GetWithdrawalCallback,
};
