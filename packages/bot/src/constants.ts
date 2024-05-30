import { BotLanguageEnum } from '@common_bot/shared';

export enum SceneEnum {
  GREETING = 'scene_greeting',
  RULES = 'scene_rules',

  SETTINGS_LANGUAGE = 'scene_settings_language',
  SETTINGS_TIMEZONE = 'scene_settings_timezone',
  SETTINGS_REMINDERS = 'scene_settings_reminders',

  RESET = 'scene_reset',
}

export enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
}

export const LANGUAGES = ['ru', 'en'] as Array<BotLanguageEnum>;
