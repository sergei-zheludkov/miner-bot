import { UTILITIES } from '@common_bot/shared';
import * as T from '../../constants';
import type { ContextState } from './types';

const { empty } = UTILITIES;

export const defaultState: ContextState = {
  scene: T.SceneEnum.RESET,

  switchToMenuMain: empty,
  switchToMenuAdmin: empty,
  switchToMenuSupport: empty,
  switchToMenuReferral: empty,
  switchToMenuSettings: empty,
  // -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneMining: empty,
  switchToSceneBalance: empty,
  switchToSceneGreeting: empty,
  switchToSceneInformation: empty,
  switchToSceneSettingsLanguage: empty,
};
