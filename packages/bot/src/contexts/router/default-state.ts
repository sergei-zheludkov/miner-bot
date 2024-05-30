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
  switchToSceneGreeting: empty,
  switchToSceneRules: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneSettingsReminders: empty,
};
