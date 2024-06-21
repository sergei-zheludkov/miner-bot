import type { WalletEntity } from '@common_bot/api';
import type { ContextState } from './types';

export const defaultState: ContextState = {
  wallet: {} as WalletEntity,
};
