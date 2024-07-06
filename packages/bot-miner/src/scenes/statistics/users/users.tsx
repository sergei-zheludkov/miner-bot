import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { CountriesEnum } from '@common_bot/shared';
import { useRouter } from '../../../contexts';
import { Error } from '../../../components';
import { useUsersStatistics } from './use-users-statistics';

const {
  RUSSIA,
  UKRAINE,
  KAZAKHSTAN,
  BELARUS,
} = CountriesEnum;

export const Users = () => {
  const { t } = useTranslation('statistics');
  const { switchToMenuStatistics } = useRouter();
  const {
    statistics,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  } = useUsersStatistics();

  const back = t('buttons:back');
  useText(switchToMenuStatistics, back);

  if (!isGetCalled || isGetLoading) {
    return null;
  }

  if (isGetError) {
    return <Error />;
  }

  if (isGetSuccess && statistics) {
    const {
      today,
      yesterday,
      last_7_days,
      last_30_days,
      this_week,
      this_month,
      all_time,
      countries,
      genders,
    } = statistics;

    const title = (
      <>
        --
        &#32;
        {t('users.title')}
        &#32;
        --
        <br />
        <br />
        <i>{t('users.new')}</i>
        <br />
        <br />
        {t('periods:today')}
        &#32;
        <b>{today}</b>
        <br />
        {t('periods:yesterday')}
        &#32;
        <b>{yesterday}</b>
        <br />
        {t('periods:week')}
        &#32;
        <b>{this_week}</b>
        <br />
        {t('periods:month')}
        &#32;
        <b>{this_month}</b>
        <br />
        {t('periods:last_7_days')}
        &#32;
        <b>{last_7_days}</b>
        <br />
        {t('periods:last_30_days')}
        &#32;
        <b>{last_30_days}</b>
        <br />
        {t('periods:all_time')}
        &#32;
        <b>{all_time}</b>
        <br />
        <br />
        <i>{t('users.countries')}</i>
        <br />
        {t(`countries:${RUSSIA}`)}
        &#32;
        {countries.RU}
        &#32;
        {t(`countries:${UKRAINE}`)}
        &#32;
        {countries.UA}
        &#32;
        {t(`countries:${KAZAKHSTAN}`)}
        &#32;
        {countries.KZ}
        &#32;
        {t(`countries:${BELARUS}`)}
        &#32;
        {countries.BY}
        <br />
        <br />
        <i>{t('users.genders')}</i>
        <br />
        👨&#32;
        {genders.male}
        &#32;
        👩&#32;
        {genders.female}
      </>
    );

    return (
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
        <Button>{back}</Button>
      </ButtonGroup>
    );
  }

  return null;
};
