import { BotLanguageEnum, CountriesEnum } from '@common_bot/shared';

export enum SceneEnum {
  MINING = 'scene_mining',
  BALANCE = 'scene_balance',
  GREETING = 'scene_greeting',
  INFORMATION = 'scene_information',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  CREATE_TASK = 'scene_create_task',
  ADD_TASK_LIMIT = 'scene_add_task_limit',

  RESET = 'scene_reset',
}

export enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
  TASKS_CONTROL = 'tasks_control_menu'
}

export const LANGUAGES = [
  BotLanguageEnum.RUSSIAN,
  BotLanguageEnum.ENGLISH,
];

export const COUNTRIES = [
  CountriesEnum.RUSSIA,
  CountriesEnum.BELARUS,
  CountriesEnum.KAZAKHSTAN,
];
