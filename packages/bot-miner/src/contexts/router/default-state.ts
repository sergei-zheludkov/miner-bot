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
  switchToMenuTaskAdmin: empty,
  switchToMenuTaskUser: empty,
  switchToMenuTaskCreation: empty,
  // -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneError: empty,
  switchToSceneMining: empty,
  switchToSceneBalance: empty,
  switchToSceneGreeting: empty,
  switchToSceneAccession: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneTaskAddLimit: empty,
  switchToSceneTaskCreationPublic: empty,
  switchToSceneTaskCreationComment: empty,
  switchToSceneTaskControllerPublic: empty,
  switchToSceneTaskControllerComment: empty,
  switchToSceneWithdrawalCreate: empty,
  switchToSceneWithdrawalListForUser: empty,
  switchToSceneWithdrawalListForAdmin: empty,
  switchToSceneReferralTerms: empty,
  switchToSceneReferralLeaders: empty,
  switchToSceneReferralInvitation: empty,
  switchToSceneRules: empty,
  switchToSceneContacts: empty,
  switchToSceneUsersController: empty,
  switchToSceneUsersPayroll: empty,
  switchToSceneStatisticsUsers: empty,
};
