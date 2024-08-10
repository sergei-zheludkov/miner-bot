import React, { useMemo, useState } from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import * as T from '../../constants';
import { logScene } from '../../logs';
import { Context } from './context';
import type { Scenes } from '../../constants';
import type { ProviderProps } from './types';

export const RouterProvider = ({ children }: ProviderProps) => {
  const { chat: { id, username, firstName } } = useBotContext();
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.DISABLE);

  logScene(id, scene, username ?? firstName);

  const switchToMenuMain = () => setScene(T.MenuEnum.MAIN);
  const switchToMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const switchToMenuSupport = () => setScene(T.MenuEnum.SUPPORT);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  const switchToMenuStatistics = () => setScene(T.MenuEnum.STATISTICS);
  const switchToMenuInformation = () => setScene(T.MenuEnum.INFORMATION);
  const switchToMenuTaskAdmin = () => setScene(T.MenuEnum.TASKS_ADMIN);
  const switchToMenuTaskUser = () => setScene(T.MenuEnum.TASKS_USER);
  const switchToMenuTaskCreation = () => setScene(T.MenuEnum.TASK_CREATION);
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  const switchToSceneError = () => setScene(T.SceneEnum.ERROR);
  const switchToSceneMining = () => setScene(T.SceneEnum.MINING);
  const switchToSceneBalance = () => setScene(T.SceneEnum.BALANCE);
  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneAccession = () => setScene(T.SceneEnum.ACCESSION);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneTaskAddLimit = () => setScene(T.SceneEnum.TASK_ADD_LIMIT);
  const switchToSceneTaskCreationPublic = () => setScene(T.SceneEnum.TASK_CREATION_PUBLIC);
  const switchToSceneTaskCreationComment = () => setScene(T.SceneEnum.TASK_CREATION_COMMENT);
  const switchToSceneTaskControllerPublic = () => setScene(T.SceneEnum.TASK_CONTROLLER_PUBLIC);
  const switchToSceneTaskControllerComment = () => setScene(T.SceneEnum.TASK_CONTROLLER_COMMENT);
  const switchToSceneWithdrawalCreate = () => setScene(T.SceneEnum.WITHDRAWAL_CREATE);
  const switchToSceneWithdrawalListForUser = () => setScene(T.SceneEnum.WITHDRAWAL_LIST_FOR_USER);
  const switchToSceneWithdrawalListForAdmin = () => setScene(T.SceneEnum.WITHDRAWAL_LIST_FOR_ADMIN);
  const switchToSceneReferralTerms = () => setScene(T.SceneEnum.REFERRAL_TERMS);
  const switchToSceneReferralLeaders = () => setScene(T.SceneEnum.REFERRAL_LEADERS);
  const switchToSceneReferralInvitation = () => setScene(T.SceneEnum.REFERRAL_INVITATION);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneContacts = () => setScene(T.SceneEnum.CONTACTS);
  const switchToSceneUsersController = () => setScene(T.SceneEnum.USERS_CONTROLLER);
  const switchToSceneUsersPayroll = () => setScene(T.SceneEnum.USERS_PAYROLL);
  const switchToSceneStatisticsUsers = () => setScene(T.SceneEnum.STATISTICS_USERS);

  useCommand(switchToMenuMain, '/main_menu');

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuSettings,
    switchToMenuStatistics,
    switchToMenuInformation,
    switchToMenuTaskAdmin,
    switchToMenuTaskUser,
    switchToMenuTaskCreation,
    // -- -- -- -- -- -- -- -- --
    switchToSceneError,
    switchToSceneMining,
    switchToSceneBalance,
    switchToSceneGreeting,
    switchToSceneSettingsLanguage,
    switchToSceneTaskAddLimit,
    switchToSceneTaskCreationPublic,
    switchToSceneTaskCreationComment,
    switchToSceneTaskControllerPublic,
    switchToSceneTaskControllerComment,
    switchToSceneWithdrawalCreate,
    switchToSceneWithdrawalListForUser,
    switchToSceneWithdrawalListForAdmin,
    switchToSceneReferralTerms,
    switchToSceneReferralLeaders,
    switchToSceneReferralInvitation,
    switchToSceneRules,
    switchToSceneContacts,
    switchToSceneUsersController,
    switchToSceneUsersPayroll,
    switchToSceneAccession,
    switchToSceneStatisticsUsers,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
