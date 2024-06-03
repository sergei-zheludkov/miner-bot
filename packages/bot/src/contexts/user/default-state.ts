import { UTILITIES } from '@common_bot/shared';
import type { UserEntity } from '@common_bot/api';
import type { ContextState } from './types';

const { asyncEmpty } = UTILITIES;

export const defaultState: ContextState = {
  referralId: null,
  user: {} as UserEntity,

  getUser: asyncEmpty,
  isGetCalled: false,
  isGetLoading: false,
  isGetSuccess: false,
  isGetError: false,
  // statusCode: NaN,
};
