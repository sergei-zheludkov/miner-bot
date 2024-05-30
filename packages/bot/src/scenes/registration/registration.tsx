import React from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  Dialog,
  DialogStep,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { CountriesEnum, BotLanguageEnum } from '@common_bot/shared';
import { useRegistration } from './use-registration';
import { QUESTION_KEYS, GENDERS } from './constants';

const { MALE, FEMALE } = GENDERS;

interface Props {
  refId: string | null;
  getUser: () => void;
}

export const Registration = ({ refId, getUser }: Props) => {
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
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
    return null;
  }

  if (!isRegistered && !isSentData) {
    const languageContent = (
      <ButtonGroup title={t('questions.language.message')}>
        <Button id={BotLanguageEnum.RUSSIAN}>
          {t(`buttons:${BotLanguageEnum.RUSSIAN}`)}
        </Button>
        <Button id={BotLanguageEnum.ENGLISH}>
          {t(`buttons:${BotLanguageEnum.ENGLISH}`)}
        </Button>
      </ButtonGroup>
    );

    const countryContent = (
      <ButtonGroup title={t('questions.country.message')}>
        <Button id={CountriesEnum.RUSSIA}>
          {t(`buttons:${CountriesEnum.RUSSIA}`)}
        </Button>
        <Button id={CountriesEnum.USA}>
          {t(`buttons:${CountriesEnum.USA}`)}
        </Button>
      </ButtonGroup>
    );

    const genderContent = (
      <ButtonGroup title={t('questions.gender.message')}>
        <Button id={MALE}>{t(`buttons:${MALE}`)}</Button>
        <Button id={FEMALE}>{t(`buttons:${FEMALE}`)}</Button>
      </ButtonGroup>
    );

    return (
      <Dialog onFinish={createUser}>
        <DialogStep
          id={QUESTION_KEYS.LANG}
          validation={isValidLanguage}
          content={languageContent}
          onNext={handleSelectLanguage}
        >
          <DialogStep
            id={QUESTION_KEYS.COUNTRY}
            validation={isValidCountry}
            content={countryContent}
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
