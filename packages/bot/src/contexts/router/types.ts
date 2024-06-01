import type { ReactNode } from 'react';
import * as T from '../../constants';

export type Scenes = T.MenuEnum | T.SceneEnum;

export type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuSupport: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneMining: () => void;
  switchToSceneGreeting: () => void;
  switchToSceneInformation: () => void;
  switchToSceneSettingsLanguage: () => void;
}

export type ProviderProps = {
  children: ReactNode;
};
