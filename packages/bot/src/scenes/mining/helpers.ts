import type { MiningEntity } from '@common_bot/api';
import { MINING_STATES } from './constants';

export const getStartedState = (mining: MiningEntity): MINING_STATES => {
  if (mining.ton_started) {
    return MINING_STATES.ACTIVE;
  }

  return MINING_STATES.REGISTRATION;
};
