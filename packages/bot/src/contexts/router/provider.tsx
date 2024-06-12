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
  const switchToMenuTasksControl = () => setScene(T.MenuEnum.TASKS_CONTROL);
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  const switchToSceneReset = () => setScene(T.SceneEnum.RESET);
  const switchToSceneMining = () => setScene(T.SceneEnum.MINING);
  const switchToSceneBalance = () => setScene(T.SceneEnum.BALANCE);
  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneInformation = () => setScene(T.SceneEnum.INFORMATION);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneCreateTask = () => setScene(T.SceneEnum.CREATE_TASK);
  const switchToSceneAddTaskLimit = () => setScene(T.SceneEnum.ADD_TASK_LIMIT);
  const switchToSceneTaskController = () => setScene(T.SceneEnum.TASK_CONTROLLER);
  const switchToSceneTaskNotification = () => setScene(T.SceneEnum.TASK_NOTIFICATION);
  const switchToSceneReferralInvitation = () => setScene(T.SceneEnum.REFERRAL_INVITATION);

  useCommand(switchToMenuMain, '/main_menu');

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToMenuTasksControl,
    // -- -- -- -- -- -- -- -- --
    switchToSceneReset,
    switchToSceneMining,
    switchToSceneBalance,
    switchToSceneGreeting,
    switchToSceneInformation,
    switchToSceneSettingsLanguage,
    switchToSceneCreateTask,
    switchToSceneAddTaskLimit,
    switchToSceneTaskController,
    switchToSceneTaskNotification,
    switchToSceneReferralInvitation,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
