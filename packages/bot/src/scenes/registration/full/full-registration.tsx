import React from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  Dialog,
  DialogStep,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { BotLanguageEnum, CONSTANTS, DATE } from '@common_bot/shared';
import { useFullRegistration } from './use-full-registration';
import {
  GENDER_KEY, LANG_KEY, TIMEZONE_KEY, GENDERS,
} from './constants';

const { TIMEZONES } = CONSTANTS;
const { getTimeZoneFromNumber } = DATE;
const { MALE, FEMALE } = GENDERS;

interface Props {
  refId: string | null;
  getUser: () => void;
}

const FullRegistration = ({ refId, getUser }: Props) => {
  const { t } = useTranslation('registration');
  const {
    isValidGender,
    isValidLanguage,
    isValidTimezone,

    isRegistered,
    isSentData,

    handleSelectLanguage,
    createUser,
  } = useFullRegistration({
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

    const genderContent = (
      <ButtonGroup title={t('questions.gender.message')}>
        <Button id={MALE}>{t(`buttons:${MALE}`)}</Button>
        <Button id={FEMALE}>{t(`buttons:${FEMALE}`)}</Button>
      </ButtonGroup>
    );

    const timezoneContent = (
      <ButtonGroup title={t('questions.timezone.message')} maxColumns={4}>
        {TIMEZONES.map((timezone) => {
          const displayTimezone = getTimeZoneFromNumber(timezone);

          return <Button id={String(timezone)} key={timezone}>{displayTimezone}</Button>;
        })}
      </ButtonGroup>
    );

    return (
      <Dialog onFinish={createUser}>
        <DialogStep
          id={LANG_KEY}
          validation={isValidLanguage}
          content={languageContent}
          onNext={handleSelectLanguage}
        >
          <DialogStep
            id={GENDER_KEY}
            validation={isValidGender}
            content={genderContent}
          >
            <DialogStep
              id={TIMEZONE_KEY}
              validation={isValidTimezone}
              content={timezoneContent}
            />
          </DialogStep>
        </DialogStep>
      </Dialog>
    );
  }

  return null;
};

export { FullRegistration };
