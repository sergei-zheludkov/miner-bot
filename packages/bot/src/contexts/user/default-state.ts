import { UTILITIES } from '@common_bot/shared';
import type { UserEntity } from '@common_bot/api';
import type { ContextState } from './types';

const { empty } = UTILITIES;

export const defaultState: ContextState = {
  referralId: null,
  user: {} as UserEntity,

  getUser: empty,
  isGetCalled: false,
  isGetLoading: false,
  isGetSuccess: false,
  isGetError: false,
  // statusCode: NaN,
};
