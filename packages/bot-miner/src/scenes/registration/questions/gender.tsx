import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

interface Props {
  handleChange: (gender: string) => void;
}

export const Gender = ({ handleChange }: Props) => {
  const { t } = useTranslation('registration');

  const title = (
    <>
      <b>{t('questions.gender.title')}</b>
      <br />
      <br />
      <i>{t('questions.gender.description')}</i>
    </>
  );

  const handleClickMale = () => handleChange('male');
  const handleClickFemale = () => handleChange('female');

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      <Button id="male" onClick={handleClickMale}>
        {t('buttons:male')}
      </Button>
      <Button id="female" onClick={handleClickFemale}>
        {t('buttons:female')}
      </Button>
    </ButtonGroup>
  );
};
