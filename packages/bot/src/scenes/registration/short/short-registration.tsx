import React from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { BotLanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useShortRegistration } from './use-short-registration';

interface Props {
  refId: string | null;
  getUser: () => void;
}

const ShortRegistration = ({ refId, getUser }: Props) => {
  const { t } = useTranslation('registration');
  const { isRegistered, isSentData, createUser } = useShortRegistration({ refId, getUser });

  if (isRegistered) {
    return <Text>{t('success')}</Text>;
  }

  if (!isRegistered && isSentData) {
    // TODO сообщение об ошибке и просьба написать в поддержку
    return null;
  }

  const createWithRussianLang = async () => {
    await createUser(BotLanguageEnum.RUSSIAN);
  };
  const createWithEnglishLang = async () => {
    await createUser(BotLanguageEnum.ENGLISH);
  };

  if (!isRegistered && !isSentData) {
    return (
      <ButtonGroup
        isResizedKeyboard
        isNewMessageEveryRender={false}
        title={t('questions.language.message')}
      >
        <Button onClick={createWithRussianLang}>
          {t(`buttons:${BotLanguageEnum.RUSSIAN}`)}
        </Button>
        <Button onClick={createWithEnglishLang}>
          {t(`buttons:${BotLanguageEnum.ENGLISH}`)}
        </Button>
      </ButtonGroup>
    );
  }

  return null;
};

export { ShortRegistration };
