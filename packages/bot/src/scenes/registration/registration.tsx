import React from 'react';
import { Text, useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRegistration } from './use-registration';
import { Question } from './questions';

interface Props {
  refId: string | null;
  getUser: () => void;
}

export const Registration = ({ refId, getUser }: Props) => {
  const { chat } = useBotContext();
  const { t } = useTranslation('registration');
  const {
    state,

    handleChangeLanguage,
    handleChangeCountry,
    handleChangeGender,

    isRegistered,
    isSentData,
  } = useRegistration({
    refId,
    getUser,
  });

  if (isRegistered) {
    console.info(chat.id, 'Bot scene:', 'scene_registration_success');
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
    return null;
  }

  if (!isRegistered && !isSentData && !state.lang) {
    console.info(chat.id, 'Bot scene:', 'scene_registration: question_lang');

    return <Question.Language handleChange={handleChangeLanguage} />;
  }

  if (!isRegistered && !isSentData && !state.country) {
    console.info(chat.id, 'Bot scene:', 'scene_registration: question_country');

    return <Question.Country handleChange={handleChangeCountry} />;
  }

  if (!isRegistered && !isSentData && !state.gender) {
    console.info(chat.id, 'Bot scene:', 'scene_registration: question_gender');

    return <Question.Gender handleChange={handleChangeGender} />;
  }

  return null;
};
