import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { CountriesEnum } from '@common_bot/shared';

const {
  RUSSIA,
  KAZAKHSTAN,
  BELARUS,
} = CountriesEnum;

interface Props {
  handleChange: (country: string) => void;
}

export const Country = ({ handleChange }: Props) => {
  const { t } = useTranslation('registration');

  const handleClickRussia = () => handleChange(RUSSIA);
  const handleClickKazakhstan = () => handleChange(KAZAKHSTAN);
  const handleClickBelarus = () => handleChange(BELARUS);

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={t('questions.country.message')}>
      <Button id={RUSSIA} onClick={handleClickRussia}>
        {t(`countries:${RUSSIA}`)}
      </Button>
      <Button id={KAZAKHSTAN} onClick={handleClickKazakhstan}>
        {t(`countries:${KAZAKHSTAN}`)}
      </Button>
      <Button id={BELARUS} onClick={handleClickBelarus}>
        {t(`countries:${BELARUS}`)}
      </Button>
    </ButtonGroup>
  );
};
