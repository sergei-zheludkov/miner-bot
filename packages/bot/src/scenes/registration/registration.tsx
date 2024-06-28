import React from 'react';
import { Text, useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { logScene } from '../../logs';
import { useRegistration } from './use-registration';
import { Question } from './questions';

interface Props {
  refId: string | null;
  getUser: () => void;
}

export const Registration = ({ refId, getUser }: Props) => {
  const { chat: { id, username, firstName } } = useBotContext();
  const { t } = useTranslation('registration');
  const {
    state,

    // handleChangeLanguage,
    handleChangeCountry,
    handleChangeGender,

    isRegistered,
    isSentData,
  } = useRegistration({
    refId,
    getUser,
  });

  if (isRegistered) {
    logScene(id, 'scene_registration_success', username ?? firstName);

    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
    return null;
  }

  // if (!isRegistered && !isSentData && !state.lang) {
  //   console.info(chat.id, 'Bot scene:', 'scene_registration: question_lang');
  //
  //   return <Question.Language handleChange={handleChangeLanguage} />;
  // }

  if (!isRegistered && !isSentData && !state.country) {
    logScene(id, 'scene_registration: question_country', username ?? firstName);

    return <Question.Country handleChange={handleChangeCountry} />;
  }

  if (!isRegistered && !isSentData && !state.gender) {
    logScene(id, 'scene_registration: question_gender', username ?? firstName);

    return <Question.Gender handleChange={handleChangeGender} />;
  }

  return null;
};
