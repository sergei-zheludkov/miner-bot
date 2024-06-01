import { BotLanguageEnum, CountriesEnum } from '@common_bot/shared';

export enum SceneEnum {
  MINING = 'scene_mining',
  GREETING = 'scene_greeting',
  INFORMATION = 'scene_information',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  RESET = 'scene_reset',
}

export enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
}

export const LANGUAGES = [
  BotLanguageEnum.RUSSIAN,
  BotLanguageEnum.ENGLISH,
];

export const COUNTRIES = [
  CountriesEnum.RUSSIA,
  CountriesEnum.USA,
];
