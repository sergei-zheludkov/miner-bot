import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { CountriesEnum } from '@common_bot/shared';

const {
  RUSSIA,
  UKRAINE,
  KAZAKHSTAN,
  BELARUS,
} = CountriesEnum;

interface Props {
  handleChange: (country: string) => void;
}

export const Country = ({ handleChange }: Props) => {
  const { t } = useTranslation('registration');

  const title = (
    <>
      <b>{t('questions.country.title')}</b>
      <br />
      <br />
      <i>{t('questions.country.description')}</i>
    </>
  );

  const handleClickRussia = () => handleChange(RUSSIA);
  const handleClickUkraine = () => handleChange(UKRAINE);
  const handleClickKazakhstan = () => handleChange(KAZAKHSTAN);
  const handleClickBelarus = () => handleChange(BELARUS);

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      <Button id={RUSSIA} onClick={handleClickRussia}>
        {t(`countries:${RUSSIA}`)}
      </Button>
      <Button id={UKRAINE} onClick={handleClickUkraine}>
        {t(`countries:${UKRAINE}`)}
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
