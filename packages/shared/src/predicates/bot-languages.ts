import { BotLanguageEnum as BotLanguage } from '../enums';

export const isRussian = (lang: BotLanguage) => lang === BotLanguage.RUSSIAN;
export const isEnglish = (lang: BotLanguage) => lang === BotLanguage.ENGLISH;
