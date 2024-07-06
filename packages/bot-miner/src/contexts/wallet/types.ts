import type { ReactNode } from 'react';
import type { WalletEntity } from '@common_bot/api';

export type ContextState = {
  wallet: WalletEntity;
}

export type ProviderProps = {
  children: ReactNode;
};
