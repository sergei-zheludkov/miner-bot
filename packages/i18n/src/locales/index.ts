import { BotLanguageEnum } from '@common_bot/shared';
import { en } from './en';
import { ru } from './ru';

const resources = {
  [BotLanguageEnum.ENGLISH]: en,
  [BotLanguageEnum.RUSSIAN]: ru,
};

export { resources };
