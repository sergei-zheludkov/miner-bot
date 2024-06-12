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
  const { chat } = useBotContext();
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
    logScene(chat.id, 'scene_registration_success', chat.username);

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
    logScene(chat.id, 'scene_registration: question_country', chat.username);

    return <Question.Country handleChange={handleChangeCountry} />;
  }

  if (!isRegistered && !isSentData && !state.gender) {
    logScene(chat.id, 'scene_registration: question_gender', chat.username);

    return <Question.Gender handleChange={handleChangeGender} />;
  }

  return null;
};
