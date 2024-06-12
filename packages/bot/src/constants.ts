import { BotLanguageEnum } from '@common_bot/shared';
import { i18n } from './i18n';

export enum SceneEnum {
  MINING = 'scene_mining',
  BALANCE = 'scene_balance',
  GREETING = 'scene_greeting',
  INFORMATION = 'scene_information',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  TASK_NOTIFICATION = 'scene_task_notification',
  TASK_CONTROLLER = 'scene_task_controller',
  ADD_TASK_LIMIT = 'scene_add_task_limit',
  CREATE_TASK = 'scene_create_task',

  REFERRAL_INVITATION = 'scene_referral_invitation',

  RESET = 'scene_reset',
  DISABLE = 'scene_disable'
}

export enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
  TASKS_CONTROL = 'tasks_control_menu'
}

export const LANGUAGES = {
  [i18n.t(`buttons:${BotLanguageEnum.RUSSIAN}`)]: BotLanguageEnum.RUSSIAN,
  [i18n.t(`buttons:${BotLanguageEnum.ENGLISH}`)]: BotLanguageEnum.ENGLISH,
};

export type Scenes = MenuEnum | SceneEnum;
