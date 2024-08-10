import React from 'react';
import { useBotContext } from '@urban-bot/core';
import { WithdrawalStatusEnum } from '@common_bot/shared';
import { Provider, useRouter } from './contexts';
import { Error, SceneWrapper } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { chat } = useBotContext();
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.ACCESSION:
      return <Scene.Accession />;

    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;

    case T.SceneEnum.ERROR:
      return <Error />;

    // ----------------------------------------MAIN MENU---------------------------------------
    case T.MenuEnum.TASKS_USER:
      return <Menu.Tasks.User />;

    case T.SceneEnum.MINING:
      return (
        <Provider.Mining>
          <Scene.Mining />
        </Provider.Mining>
      );

    case T.SceneEnum.TASK_CONTROLLER_PUBLIC:
      return (
        <Provider.Mining>
          <Scene.Tasks.Controller />
        </Provider.Mining>
      );

    case T.SceneEnum.WITHDRAWAL_CREATE:
      return (
        <Provider.Wallet>
          <Scene.Withdrawals.Create />
        </Provider.Wallet>
      );

    case T.SceneEnum.WITHDRAWAL_LIST_FOR_USER:
      return (
        <Provider.Withdrawal sort="DESC" userId={chat.id}>
          <Scene.Withdrawals.ListForUser />
        </Provider.Withdrawal>
      );

    case T.SceneEnum.BALANCE:
      return (
        <Provider.Wallet>
          <Scene.Balance />
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
    case T.MenuEnum.TASK_CREATION:
      return <Menu.Tasks.Creation />;

    case T.MenuEnum.TASKS_ADMIN:
      return <Menu.Tasks.Admin />;

    case T.MenuEnum.STATISTICS:
      return <Menu.Statistics />;

    case T.SceneEnum.USERS_CONTROLLER:
      return (
        <Scene.Users.Provider>
          <Scene.Users.Controller />
        </Scene.Users.Provider>
      );

    case T.SceneEnum.USERS_PAYROLL:
      return (
        <Scene.Users.Provider>
          <Scene.Users.Payroll />
        </Scene.Users.Provider>
      );

    case T.SceneEnum.WITHDRAWAL_LIST_FOR_ADMIN:
      return (
        <Provider.Withdrawal sort="ASC" status={WithdrawalStatusEnum.CONFIRMED}>
          <Scene.Withdrawals.ListForAdmin />
        </Provider.Withdrawal>
      );

    // ----------------------------------------REFERRAL--------------------------------------
    case T.SceneEnum.REFERRAL_TERMS:
      return <Scene.Referral.Terms />;

    case T.SceneEnum.REFERRAL_LEADERS:
      return <Scene.Referral.Leaders />;

    case T.SceneEnum.REFERRAL_INVITATION:
      return <Scene.Referral.Invitation />;

    // ------------------------------------TASKS ADMIN CONTROLLER MENU----------------------------------
    case T.SceneEnum.TASK_CREATION_PUBLIC:
      return <Scene.Tasks.Creation.Public />;

    case T.SceneEnum.TASK_CREATION_COMMENT:
      return <Scene.Tasks.Creation.Comment />;

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
