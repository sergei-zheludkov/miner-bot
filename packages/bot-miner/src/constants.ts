import { BotLanguageEnum } from '@common_bot/shared';
import { i18n } from './i18n';

export enum SceneEnum {
  MINING = 'scene_mining',
  BALANCE = 'scene_balance',
  GREETING = 'scene_greeting',
  ACCESSION = 'scene_accession',

  SETTINGS_LANGUAGE = 'scene_settings_language',

  STATISTICS_USERS = 'scene_statistics_users',

  TASK_ADD_LIMIT = 'scene_task_add_limit',
  TASK_CREATION_PUBLIC = 'scene_task_creation_public',
  TASK_CREATION_COMMENT = 'scene_task_creation_comment',
  TASK_CONTROLLER_PUBLIC = 'scene_task_controller_public',
  TASK_CONTROLLER_COMMENT = 'scene_task_controller_comment',

  USERS_CONTROLLER = 'scene_users_controller',
  USERS_PAYROLL = 'scene_users_payroll',

  WITHDRAWAL_CREATE = 'scene_withdrawal_create',
  WITHDRAWAL_LIST_FOR_USER = 'scene_withdrawal_list_for_user',
  WITHDRAWAL_LIST_FOR_ADMIN = 'scene_withdrawal_list_for_admin',

  REFERRAL_TERMS = 'scene_referral_terms',
  REFERRAL_LEADERS = 'scene_referral_leaders',
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
  SETTINGS = 'settings_menu',
  STATISTICS = 'statistics_menu',
  INFORMATION = 'information_menu',

  TASKS_USER = 'tasks_user_menu',
  TASKS_ADMIN = 'tasks_admin_menu',
  TASK_CREATION = 'task_creation_menu',
}

export const LANGUAGES = {
  [i18n.t(`buttons:${BotLanguageEnum.RUSSIAN}`)]: BotLanguageEnum.RUSSIAN,
  [i18n.t(`buttons:${BotLanguageEnum.ENGLISH}`)]: BotLanguageEnum.ENGLISH,
};

export type Scenes = MenuEnum | SceneEnum;

// TODO вынести в shared
export const SUPPORT_ID = '6694504339';
