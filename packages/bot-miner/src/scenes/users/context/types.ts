import type { ReactNode } from 'react';
import type { UserEntity } from '@common_bot/api';

export type ContextState = {
  user: UserEntity;

  isGetUserCalled: boolean;
  isGetUserLoading: boolean;
  isGetUserSuccess: boolean;
  isGetUserError: boolean;
}

export type ProviderProps = {
  children: ReactNode;
};
