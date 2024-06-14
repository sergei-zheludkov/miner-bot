import type { UserEntity } from '@common_bot/api';
import { MINING_STATES } from './constants';

export const getStartedState = (user: UserEntity): MINING_STATES => {
  if (user.mining.ton_started) {
    return MINING_STATES.ACTIVE;
  }

  return MINING_STATES.REGISTRATION;
};
