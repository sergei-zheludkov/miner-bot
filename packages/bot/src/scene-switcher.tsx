import React from 'react';
import { useRouter } from './contexts';
import { SceneWrapper } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;

    // ----------------------------------------MAIN MENU---------------------------------------
    case T.SceneEnum.INFORMATION:
      return <Scene.Information />;

    case T.SceneEnum.MINING:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.Mining />
        </SceneWrapper>
      );

    case T.SceneEnum.BALANCE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.Balance />
        </SceneWrapper>
      );

    case T.SceneEnum.TASK_CONTROLLER:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.TaskController />
        </SceneWrapper>
      );

    // ----------------------------------------ADMIN MENU--------------------------------------
    case T.MenuEnum.TASKS_CONTROL:
      return <Menu.TasksControl />;

    // ----------------------------------------REFERRAL MENU--------------------------------------
    case T.SceneEnum.REFERRAL_INVITATION:
      return <Scene.ReferralInvitation />;

    // ------------------------------------TASKS CONTROL MENU----------------------------------
    case T.SceneEnum.CREATE_TASK:
      return <Scene.CreateTask />;

    // -------------------------------------SETTINGS MENU-------------------------------------
    case T.SceneEnum.SETTINGS_LANGUAGE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsLanguage />
        </SceneWrapper>
      );

    // ----------------------------------------------------------------------------------------
    case T.MenuEnum.MAIN:
      return <Menu.Main />;

    case T.MenuEnum.ADMIN:
      return <Menu.Admin />;

    case T.MenuEnum.REFERRAL:
      return <Menu.Referral />;

    case T.MenuEnum.SETTINGS:
      return <Menu.Settings />;

    // ----------------------------------------------------------------------------------------
    default:
      return null;
  }
};
