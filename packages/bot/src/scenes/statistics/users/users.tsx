import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Error, Loading } from '../../../components';
import { useUsersStatistics } from './use-users-statistics';

export const Users = () => {
  const { t } = useTranslation('statistics');
  const { switchToMenuMain } = useRouter();
  const {
    statistics,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  } = useUsersStatistics();

  const back = t('buttons:back');
  useText(switchToMenuMain, back);

  if (!isGetCalled || isGetLoading) {
    return <Loading />;
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
        {t('periods.today')}
        &#32;
        <b>{today}</b>
        <br />
        {t('periods.yesterday')}
        &#32;
        <b>{yesterday}</b>
        <br />
        {t('periods.this_week')}
        &#32;
        <b>{this_week}</b>
        <br />
        {t('periods.this_month')}
        &#32;
        <b>{this_month}</b>
        <br />
        {t('periods.last_7_days')}
        &#32;
        <b>{last_7_days}</b>
        <br />
        {t('periods.last_30_days')}
        &#32;
        <b>{last_30_days}</b>
        <br />
        {t('periods.all_time')}
        &#32;
        <b>{all_time}</b>
        <br />
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
