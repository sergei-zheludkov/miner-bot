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
  switchToMenuTasksControl: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneError: () => void;
  switchToSceneMining: () => void;
  switchToSceneBalance: () => void;
  switchToSceneGreeting: () => void;
  switchToSceneAccession: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneTaskCreate: () => void;
  switchToSceneTaskController: () => void;
  switchToSceneTaskNotification: () => void;
  switchToSceneTaskAddLimit: () => void;
  switchToSceneWithdrawalCreate: () => void;
  switchToSceneWithdrawalList: () => void;
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
