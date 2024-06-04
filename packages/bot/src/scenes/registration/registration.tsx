import React from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  Dialog,
  DialogStep, useBotContext,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { CountriesEnum, BotLanguageEnum } from '@common_bot/shared';
import { useRegistration } from './use-registration';
import { QUESTION_KEYS } from './constants';

const {
  RUSSIA,
  KAZAKHSTAN,
  BELARUS,
} = CountriesEnum;

interface Props {
  refId: string | null;
  getUser: () => void;
}

export const Registration = ({ refId, getUser }: Props) => {
  const { chat } = useBotContext();
  const { t } = useTranslation('registration');
  const {
    isValidGender,
    isValidLanguage,
    isValidCountry,

    isRegistered,
    isSentData,

    handleSelectLanguage,
    createUser,
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

  if (!isRegistered && !isSentData) {
    console.info(chat.id, 'Bot scene:', 'scene_registration');

    const countryContent = (
      <ButtonGroup isReplyButtons isResizedKeyboard title={t('questions.country.message')}>
        <Button id={RUSSIA}>
          {t(`countries:${RUSSIA}`)}
        </Button>
        <Button id={KAZAKHSTAN}>
          {t(`countries:${KAZAKHSTAN}`)}
        </Button>
        <Button id={BELARUS}>
          {t(`countries:${BELARUS}`)}
        </Button>
      </ButtonGroup>
    );

    const languageContent = (
      <ButtonGroup isReplyButtons isResizedKeyboard title={t('questions.language.message')}>
        <Button id={BotLanguageEnum.RUSSIAN}>
          {t(`buttons:${BotLanguageEnum.RUSSIAN}`)}
        </Button>
        <Button id={BotLanguageEnum.ENGLISH}>
          {t(`buttons:${BotLanguageEnum.ENGLISH}`)}
        </Button>
      </ButtonGroup>
    );

    const genderContent = (
      <ButtonGroup isReplyButtons isResizedKeyboard title={t('questions.gender.message')}>
        <Button>{t('buttons:male')}</Button>
        <Button>{t('buttons:female')}</Button>
      </ButtonGroup>
    );

    return (
      <Dialog onFinish={createUser}>
        <DialogStep
          id={QUESTION_KEYS.COUNTRY}
          validation={isValidCountry}
          content={countryContent}
        >
          <DialogStep
            id={QUESTION_KEYS.LANG}
            validation={isValidLanguage}
            content={languageContent}
            onNext={handleSelectLanguage}
          >
            <DialogStep
              id={QUESTION_KEYS.GENDER}
              validation={isValidGender}
              content={genderContent}
            />
          </DialogStep>
        </DialogStep>
      </Dialog>
    );
  }

  return null;
};
