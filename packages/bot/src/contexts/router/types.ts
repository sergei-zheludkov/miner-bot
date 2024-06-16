import type { ReactNode } from 'react';
import type { Scenes } from '../../constants';

export type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuSupport: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;
  switchToMenuTasksControl: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneReset: () => void;
  switchToSceneMining: () => void;
  switchToSceneBalance: () => void;
  switchToSceneGreeting: () => void;
  switchToSceneInformation: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneCreateTask: () => void;
  switchToSceneAddTaskLimit: () => void;
  switchToSceneTaskController: () => void;
  switchToSceneTaskNotification: () => void;
  switchToSceneWithdrawal: () => void;
  switchToSceneReferralInvitation: () => void;
}

export type ProviderProps = {
  children: ReactNode;
};
