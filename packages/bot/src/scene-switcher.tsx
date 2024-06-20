import React from 'react';
import { useRouter } from './contexts';
import { SceneWrapper } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.RESET:
      return <Scene.Reset />;

    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;

    // ----------------------------------------MAIN MENU---------------------------------------
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

    case T.SceneEnum.WITHDRAWAL:
      return <Scene.Withdrawal />;

    case T.SceneEnum.RULES:
      return <Scene.Rules />;

    case T.SceneEnum.CONTACTS:
      return <Scene.Contacts />;

    // ----------------------------------------ADMIN MENU--------------------------------------
    case T.MenuEnum.TASKS_CONTROL:
      return <Menu.TasksControl />;

    case T.SceneEnum.USERS_CONTROL:
      return <Scene.UsersControl />;

    // ----------------------------------------REFERRAL MENU--------------------------------------
    case T.SceneEnum.REFERRAL_INVITATION:
      return <Scene.ReferralInvitation />;

    // ------------------------------------TASKS CONTROL MENU----------------------------------
    case T.SceneEnum.CREATE_TASK:
      return <Scene.CreateTask />;

    case T.SceneEnum.TASK_NOTIFICATION:
      return <Scene.TaskNotification />;

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

    case T.MenuEnum.INFORMATION:
      return <Menu.Information />;

    // ----------------------------------------------------------------------------------------
    default:
      return null;
  }
};
