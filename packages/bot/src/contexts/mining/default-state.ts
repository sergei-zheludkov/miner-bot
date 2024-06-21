import type { MiningEntity } from '@common_bot/api';
import type { ContextState } from './types';

export const defaultState: ContextState = {
  mining: {} as MiningEntity,
};
