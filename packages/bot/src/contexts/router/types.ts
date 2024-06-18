import type { ReactNode } from 'react';
import type { Scenes } from '../../constants';

export type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuSupport: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;
  switchToMenuInformation: () => void;
  switchToMenuTasksControl: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneReset: () => void;
  switchToSceneMining: () => void;
  switchToSceneBalance: () => void;
  switchToSceneGreeting: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneCreateTask: () => void;
  switchToSceneAddTaskLimit: () => void;
  switchToSceneTaskController: () => void;
  switchToSceneTaskNotification: () => void;
  switchToSceneWithdrawal: () => void;
  switchToSceneReferralInvitation: () => void;
  switchToSceneRules: () => void;
  switchToSceneContacts: () => void;
}

export type ProviderProps = {
  children: ReactNode;
};
