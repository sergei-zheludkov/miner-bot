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
  switchToMenuTasksControl: empty,
  // -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneMining: empty,
  switchToSceneBalance: empty,
  switchToSceneGreeting: empty,
  switchToSceneInformation: empty,
  switchToSceneTaskController: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneCreateTask: empty,
  switchToSceneAddTaskLimit: empty,
};
