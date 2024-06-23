import { BotLanguageEnum } from '@common_bot/shared';
import { i18n } from './i18n';

export enum SceneEnum {
  MINING = 'scene_mining',
  BALANCE = 'scene_balance',
  GREETING = 'scene_greeting',
  ACCESSION = 'scene_accession',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  TASK_NOTIFICATION = 'scene_task_notification',
  TASK_CONTROLLER = 'scene_task_controller',
  ADD_TASK_LIMIT = 'scene_add_task_limit',
  CREATE_TASK = 'scene_create_task',
  USERS_CONTROL = 'scene_users_control',

  WITHDRAWAL = 'scene_withdrawal',
  REFERRAL_INVITATION = 'scene_referral_invitation',

  RULES = 'scene_rules',
  CONTACTS = 'scene_contacts',

  ERROR = 'scene_error',
  DISABLE = 'scene_disable',
}

export enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
  STATISTICS = 'statistics_menu',
  INFORMATION = 'information_menu',
  TASKS_CONTROL = 'tasks_control_menu',
}

export const LANGUAGES = {
  [i18n.t(`buttons:${BotLanguageEnum.RUSSIAN}`)]: BotLanguageEnum.RUSSIAN,
  [i18n.t(`buttons:${BotLanguageEnum.ENGLISH}`)]: BotLanguageEnum.ENGLISH,
};

export type Scenes = MenuEnum | SceneEnum;

export const SUPPORT_ID = '6694504339';
