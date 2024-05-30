import { BotLanguageEnum as BotLanguage } from '../enums';

const isRussian = (lang: BotLanguage) => lang === BotLanguage.RUSSIAN;
const isEnglish = (lang: BotLanguage) => lang === BotLanguage.ENGLISH;

export { isRussian, isEnglish };
