import type { ReactNode } from 'react';
import type {
  Fetch, MiningEntity, MiningCreateDto, MiningUpdateDto,
} from '@common_bot/api';

export type PostMiningCallback = Fetch<MiningCreateDto, MiningEntity>;
export type PatchMiningCallback = Fetch<MiningUpdateDto, MiningEntity>;

export type ContextState = {
  mining?: MiningEntity;

  isGetMiningSuccess: boolean;

  isPostMiningCalled: boolean;
  isPostMiningLoading: boolean;
  isPostMiningSuccess: boolean;

  isPatchMiningCalled: boolean;
  isPatchMiningLoading: boolean;
  isPatchMiningSuccess: boolean;

  postMining: PostMiningCallback;
  patchMining: PatchMiningCallback;
}

export type ProviderProps = {
  children: ReactNode;
};
