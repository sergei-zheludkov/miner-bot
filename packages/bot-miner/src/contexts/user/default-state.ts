import { UTILITIES } from '@common_bot/shared';
import type { UserEntity } from '@common_bot/api';
import { ContextState, GetUserCallback } from './types';

const { asyncEmpty } = UTILITIES;

export const defaultState: ContextState = {
  referralId: null,
  user: {} as UserEntity,
  toggles: {},
  isAdmin: false,

  isGetCalled: false,
  isGetLoading: false,
  isGetSuccess: false,
  isGetError: false,

  getUser: asyncEmpty as unknown as GetUserCallback,
};
