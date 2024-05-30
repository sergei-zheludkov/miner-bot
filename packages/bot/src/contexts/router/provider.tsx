import React, { useMemo, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import * as T from '../../constants';
import { Context } from './context';
import type { ProviderProps, Scenes } from './types';

export const RouterProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.RESET);
  console.info(chat.id, 'Bot scene:', scene);

  const switchToMenuMain = () => setScene(T.MenuEnum.MAIN);
  const switchToMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const switchToMenuSupport = () => setScene(T.MenuEnum.SUPPORT);
  const switchToMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneSettingsTimezone = () => setScene(T.SceneEnum.SETTINGS_TIMEZONE);
  const switchToSceneSettingsReminders = () => setScene(T.SceneEnum.SETTINGS_REMINDERS);

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuReferral,
    switchToMenuSettings,
    // -- -- -- -- -- -- -- -- --
    switchToSceneGreeting,
    switchToSceneRules,
    switchToSceneSettingsLanguage,
    switchToSceneSettingsTimezone,
    switchToSceneSettingsReminders,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
