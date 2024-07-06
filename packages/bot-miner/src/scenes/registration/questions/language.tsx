import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { BotLanguageEnum } from '@common_bot/shared';

const { RUSSIAN, ENGLISH } = BotLanguageEnum;

interface Props {
  handleChange: (lang: string) => void;
}

export const Language = ({ handleChange }: Props) => {
  const { t } = useTranslation('registration');

  const handleClickRussian = async () => handleChange(RUSSIAN);
  const handleClickEnglish = async () => handleChange(ENGLISH);

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={t('questions.language.message')}>
      <Button id={RUSSIAN} onClick={handleClickRussian}>
        {t(`buttons:${RUSSIAN}`)}
      </Button>
      <Button id={ENGLISH} onClick={handleClickEnglish}>
        {t(`buttons:${ENGLISH}`)}
      </Button>
    </ButtonGroup>
  );
};
