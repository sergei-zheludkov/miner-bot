import type { ReactNode } from 'react';
import type { Fetch, UserEntity } from '@common_bot/api';

export type GetUserCallback = Fetch<never, UserEntity>;

export type ContextState = {
  referralId: string | null;
  user: UserEntity;

  getUser: GetUserCallback;
  isGetCalled: boolean;
  isGetLoading: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  getStatusCode?: number;
}

export type ProviderProps = {
  children: ReactNode;
};
