import type { UserEntity } from '@common_bot/api';
import type { ContextState } from './types';

export const defaultState: ContextState = {
  user: {} as UserEntity,
  isGetUserCalled: false,
  isGetUserLoading: false,
  isGetUserSuccess: false,
  isGetUserError: false,
};
