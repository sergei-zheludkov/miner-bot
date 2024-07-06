import { UTILITIES } from '@common_bot/shared';
import type { MiningEntity } from '@common_bot/api';
import type { ContextState, PostMiningCallback, PatchMiningCallback } from './types';

const { asyncEmpty } = UTILITIES;

export const defaultState: ContextState = {
  mining: {} as MiningEntity,

  isGetMiningSuccess: false,

  isPostMiningCalled: false,
  isPostMiningLoading: false,
  isPostMiningSuccess: false,

  isPatchMiningCalled: false,
  isPatchMiningLoading: false,
  isPatchMiningSuccess: false,

  postMining: asyncEmpty as unknown as PostMiningCallback,
  patchMining: asyncEmpty as unknown as PatchMiningCallback,
};
