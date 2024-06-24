import { UTILITIES } from '@common_bot/shared';
import * as T from '../../constants';
import type { ContextState } from './types';

const { empty } = UTILITIES;

export const defaultState: ContextState = {
  scene: T.SceneEnum.DISABLE,

  switchToMenuMain: empty,
  switchToMenuAdmin: empty,
  switchToMenuSupport: empty,
  switchToMenuSettings: empty,
  switchToMenuStatistics: empty,
  switchToMenuInformation: empty,
  switchToMenuTasksControl: empty,
  // -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneError: empty,
  switchToSceneMining: empty,
  switchToSceneBalance: empty,
  switchToSceneGreeting: empty,
  switchToSceneAccession: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneCreateTask: empty,
  switchToSceneAddTaskLimit: empty,
  switchToSceneTaskController: empty,
  switchToSceneTaskNotification: empty,
  switchToSceneWithdrawal: empty,
  switchToSceneReferralTerms: empty,
  switchToSceneReferralInvitation: empty,
  switchToSceneRules: empty,
  switchToSceneContacts: empty,
  switchToSceneUsersControl: empty,
  switchToSceneStatisticsUsers: empty,
};
