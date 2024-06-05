import { BotLanguageEnum, CountriesEnum } from '@common_bot/shared';
import { i18n } from './i18n';

export enum SceneEnum {
  MINING = 'scene_mining',
  BALANCE = 'scene_balance',
  GREETING = 'scene_greeting',
  INFORMATION = 'scene_information',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  CREATE_TASK = 'scene_create_task',
  ADD_TASK_LIMIT = 'scene_add_task_limit',
  TASK_CONTROLLER = 'scene_task_controller',

  REFERRAL_INVITATION = 'scene_referral_invitation',

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

export const COUNTRIES = {
  [i18n.t(`countries:${CountriesEnum.RUSSIA}`)]: CountriesEnum.RUSSIA,
  [i18n.t(`countries:${CountriesEnum.BELARUS}`)]: CountriesEnum.BELARUS,
  [i18n.t(`countries:${CountriesEnum.KAZAKHSTAN}`)]: CountriesEnum.KAZAKHSTAN,
};

export const LANGUAGES = {
  [i18n.t(`buttons:${BotLanguageEnum.RUSSIAN}`)]: BotLanguageEnum.RUSSIAN,
  [i18n.t(`buttons:${BotLanguageEnum.ENGLISH}`)]: BotLanguageEnum.ENGLISH,
};

// = /^(👨|👩)\s[A-Za-zА-Яа-я]{4,7}$/gm;
export const GENDERS = {
  [i18n.t('buttons:male')]: 'male',
  [i18n.t('buttons:female')]: 'female',
};
