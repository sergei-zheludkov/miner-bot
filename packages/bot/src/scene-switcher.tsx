import React from 'react';
import { Provider, useRouter } from './contexts';
import { SceneWrapper, Error } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.ACCESSION:
      return <Scene.Accession />;

    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;

    case T.SceneEnum.ERROR:
      return <Error />;

    // ----------------------------------------MAIN MENU---------------------------------------
    case T.SceneEnum.MINING:
      return (
        <Provider.Mining>
          <Scene.Mining />
        </Provider.Mining>
      );

    case T.SceneEnum.TASK_CONTROLLER:
      return (
        <Provider.Mining>
          <Scene.Tasks.Controller />
        </Provider.Mining>
      );

    case T.SceneEnum.REFERRAL_TERMS:
      return <Scene.Referral.Terms />;

    case T.SceneEnum.BALANCE:
      return (
        <Provider.Wallet>
          <Scene.Balance />
        </Provider.Wallet>
      );

    case T.SceneEnum.WITHDRAWAL:
      return (
        <Provider.Wallet>
          <Scene.Withdrawal />
        </Provider.Wallet>
      );

    case T.SceneEnum.RULES:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.Rules />
        </SceneWrapper>
      );

    case T.SceneEnum.CONTACTS:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.Contacts />
        </SceneWrapper>
      );

    // ----------------------------------------ADMIN MENU--------------------------------------
    case T.MenuEnum.TASKS_CONTROL:
      return <Menu.TasksControl />;

    case T.MenuEnum.STATISTICS:
      return <Menu.Statistics />;

    case T.SceneEnum.USERS_CONTROL:
      return <Scene.UsersControl />;

    // ----------------------------------------REFERRAL MENU--------------------------------------
    case T.SceneEnum.REFERRAL_INVITATION:
      return <Scene.Referral.Invitation />;

    // ------------------------------------TASKS CONTROL MENU----------------------------------
    case T.SceneEnum.CREATE_TASK:
      return <Scene.Tasks.Create />;

      // case T.SceneEnum.TASK_NOTIFICATION:
      //   return <Scene.Tasks.Notification />;

    // -------------------------------------SETTINGS MENU-------------------------------------
    case T.SceneEnum.SETTINGS_LANGUAGE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsLanguage />
        </SceneWrapper>
      );

    // -------------------------------------STATISTICS MENU-------------------------------------
    case T.SceneEnum.STATISTICS_USERS:
      return <Scene.Statistics.Users />;

    // ----------------------------------------------------------------------------------------
    case T.MenuEnum.MAIN:
      return <Menu.Main />;

    case T.MenuEnum.ADMIN:
      return <Menu.Admin />;

    case T.MenuEnum.SETTINGS:
      return <Menu.Settings />;

    case T.MenuEnum.INFORMATION:
      return <Menu.Information />;

    // ----------------------------------------------------------------------------------------
    default:
      return null;
  }
};
