import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Error } from '../../../components';
import { useLeaders } from './use-leaders';
import { getNumber } from './helpers';
import { isAllTime, isMonth, isToday } from './predicates';

export const Leaders = () => {
  const { t } = useTranslation('referral');
  const { switchToSceneReferralTerms } = useRouter();
  const {
    data,
    scene,
    handleClickToday,
    handleClickMonth,
    handleClickAllTime,
    // isGetCalled,
    // isGetLoading,
    isGetSuccess,
    isGetError,
  } = useLeaders();

  if (isGetError) {
    return <Error />;
  }

  if (isGetSuccess && data) {
    const title = (
      <>
        {t('leaders.title')}
        &#32;
        {t(`periods:${scene}`).toLowerCase()}
        <br />
        <br />
        {!data.length
          ? (
            <>
              {t('leaders.empty')}
              <br />
            </>
          ) : data.map(({
            id,
            firstname = '',
            gender,
            country,
            referral_counter,
          }, i) => (
            <React.Fragment key={id}>
              {getNumber(i)}
              &#32;
              {firstname.slice(0, 20)}
              &#32;
              -
              &#32;
              {t(`buttons:${gender}`).slice(0, -8)}
              &#32;
              {t(`countries:${country}`)}
              &#32;
              -
              &#32;
              {referral_counter}
              <br />
            </React.Fragment>
          ))}
        <br />
        *
        <i>{t('leaders.updates')}</i>
      </>
    );

    const buttons = [
      isToday(scene) ? null : (
        <Button key="today" onClick={handleClickToday}>
          {t('buttons:today')}
        </Button>
      ),

      isMonth(scene) ? null : (
        <Button key="month" onClick={handleClickMonth}>
          {t('buttons:month')}
        </Button>
      ),

      isAllTime(scene) ? null : (
        <Button key="all-time" onClick={handleClickAllTime}>
          {t('buttons:all_time')}
        </Button>
      ),
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {buttons}
        {[
          <Button key="back-to-referral-terms" onClick={switchToSceneReferralTerms}>
            {t('buttons:back')}
          </Button>,
        ]}
      </ButtonGroup>
    );
  }

  return null;
};
