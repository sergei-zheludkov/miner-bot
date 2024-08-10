import type { ReactNode } from 'react';
import type { Scenes } from '../../constants';

export type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuSupport: () => void;
  switchToMenuSettings: () => void;
  switchToMenuStatistics: () => void;
  switchToMenuInformation: () => void;
  switchToMenuTaskAdmin: () => void;
  switchToMenuTaskUser: () => void;
  switchToMenuTaskCreation: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneError: () => void;
  switchToSceneMining: () => void;
  switchToSceneBalance: () => void;
  switchToSceneGreeting: () => void;
  switchToSceneAccession: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneTaskAddLimit: () => void;
  switchToSceneTaskCreationPublic: () => void;
  switchToSceneTaskCreationComment: () => void;
  switchToSceneTaskControllerPublic: () => void;
  switchToSceneTaskControllerComment: () => void;
  switchToSceneWithdrawalCreate: () => void;
  switchToSceneWithdrawalListForUser: () => void;
  switchToSceneWithdrawalListForAdmin: () => void;
  switchToSceneReferralTerms: () => void;
  switchToSceneReferralLeaders: () => void;
  switchToSceneReferralInvitation: () => void;
  switchToSceneRules: () => void;
  switchToSceneContacts: () => void;
  switchToSceneUsersController: () => void;
  switchToSceneUsersPayroll: () => void;
  switchToSceneStatisticsUsers: () => void;
}

export type ProviderProps = {
  children: ReactNode;
};
