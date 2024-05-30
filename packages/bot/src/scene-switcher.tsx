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
      //
      // case T.Scene.RULES:
      //   return <Scene.Rules />;
      // ----------------------------------------ADMIN MENU--------------------------------------

    // ----------------------------------------SETTINGS----------------------------------------
    case T.SceneEnum.SETTINGS_LANGUAGE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsLanguage />
        </SceneWrapper>
      );

    case T.SceneEnum.SETTINGS_TIMEZONE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsTimezone />
        </SceneWrapper>
      );

    case T.SceneEnum.SETTINGS_REMINDERS:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsReminder />
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
