import { useEffect } from 'react';
import { BotLanguageEnum, HOOK } from '@common_bot/shared';
import { UserCreateDto } from '@common_bot/api';
import { useUser, usePatchUser } from '../../../contexts';
import { LANGUAGES } from '../../../constants';

const { useToggleState } = HOOK;

export const useSettingsLanguage = () => {
  const { user, getUser } = useUser();
  const { patchUser, isPatchSuccess: isSaved } = usePatchUser();
  const {
    toggle: isChangingMode,
    turnOn: turnOnChangingMode,
    turnOff: turnOffChangingMode,
  } = useToggleState();

  // TODO зарефакторить as unknown as BotLanguageEnum через Хелперы
  const currentLang = user.lang as unknown as BotLanguageEnum;
  const availableLanguages = Object.values(LANGUAGES).filter((lang) => lang !== currentLang);

  const handleSave = (lang: BotLanguageEnum) => async () => {
    await patchUser({
      id: user.id,
      // Такой финт из-за кривой генерации enum в @common_bot/api
      lang: lang as unknown as UserCreateDto['lang'],
    });

    turnOffChangingMode();
  };

  useEffect(() => {
    if (isSaved) {
      // Necessary to send request to event_loop
      setTimeout(getUser, 300);
    }
  }, [isSaved]);

  return {
    currentLang,
    availableLanguages,

    isSaved,
    isChangingMode,

    handleSave,
    turnOnChangingMode,
    turnOffChangingMode,
  };
};
