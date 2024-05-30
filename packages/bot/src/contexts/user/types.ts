import type { ReactNode } from 'react';
import { UserEntity } from '@common_bot/api';

export type ContextState = {
  referralId: string | null;
  user: UserEntity;

  getUser: () => void;
  isGetCalled: boolean;
  isGetLoading: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  getStatusCode?: number;
}

export type ProviderProps = {
  children: ReactNode;
};
