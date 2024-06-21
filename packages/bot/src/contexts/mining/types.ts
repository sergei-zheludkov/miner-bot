import type { ReactNode } from 'react';
import type { MiningEntity } from '@common_bot/api';

export type ContextState = {
  mining: MiningEntity;
}

export type ProviderProps = {
  children: ReactNode;
};
