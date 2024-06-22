import React, { useMemo, useState } from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import * as T from '../../constants';
import { logScene } from '../../logs';
import { Context } from './context';
import type { Scenes } from '../../constants';
import type { ProviderProps } from './types';

export const RouterProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.DISABLE);

  logScene(chat.id, scene, chat.username);

  const switchToMenuMain = () => setScene(T.MenuEnum.MAIN);
  const switchToMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const switchToMenuSupport = () => setScene(T.MenuEnum.SUPPORT);
  const switchToMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  const switchToMenuInformation = () => setScene(T.MenuEnum.INFORMATION);
  const switchToMenuTasksControl = () => setScene(T.MenuEnum.TASKS_CONTROL);
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  const switchToSceneReset = () => setScene(T.SceneEnum.RESET);
  const switchToSceneError = () => setScene(T.SceneEnum.ERROR);
  const switchToSceneMining = () => setScene(T.SceneEnum.MINING);
  const switchToSceneBalance = () => setScene(T.SceneEnum.BALANCE);
  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneAccession = () => setScene(T.SceneEnum.ACCESSION);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneCreateTask = () => setScene(T.SceneEnum.CREATE_TASK);
  const switchToSceneAddTaskLimit = () => setScene(T.SceneEnum.ADD_TASK_LIMIT);
  const switchToSceneTaskController = () => setScene(T.SceneEnum.TASK_CONTROLLER);
  const switchToSceneTaskNotification = () => setScene(T.SceneEnum.TASK_NOTIFICATION);
  const switchToSceneWithdrawal = () => setScene(T.SceneEnum.WITHDRAWAL);
  const switchToSceneReferralInvitation = () => setScene(T.SceneEnum.REFERRAL_INVITATION);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneContacts = () => setScene(T.SceneEnum.CONTACTS);
  const switchToSceneUsersControl = () => setScene(T.SceneEnum.USERS_CONTROL);

  useCommand(switchToMenuMain, '/main_menu');

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToMenuInformation,
    switchToMenuTasksControl,
    // -- -- -- -- -- -- -- -- --
    switchToSceneReset,
    switchToSceneError,
    switchToSceneMining,
    switchToSceneBalance,
    switchToSceneGreeting,
    switchToSceneSettingsLanguage,
    switchToSceneCreateTask,
    switchToSceneAddTaskLimit,
    switchToSceneTaskController,
    switchToSceneTaskNotification,
    switchToSceneWithdrawal,
    switchToSceneReferralInvitation,
    switchToSceneRules,
    switchToSceneContacts,
    switchToSceneUsersControl,
    switchToSceneAccession,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
