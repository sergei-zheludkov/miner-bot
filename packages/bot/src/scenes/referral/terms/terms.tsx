import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { Error, Loading } from '../../../components';
import { useTerms } from './use-terms';

export const Terms = () => {
  const { t } = useTranslation('buttons');
  const {
    switchToMenuMain,
    switchToSceneReferralLeaders,
    switchToSceneReferralInvitation,
  } = useRouter();
  const {
    user,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  } = useTerms();

  if (!isGetCalled || isGetLoading) {
    return <Loading isRemoveKeyboard />;
  }

  if (isGetError) {
    return <Error />;
  }

  if (isGetSuccess && user) {
    const { referral_counter } = user;

    const title = (
      <>
        <b>{t('referral:title')}</b>
        <br />
        <br />
        <i>{t('referral:statistic.connected', { count: referral_counter })}</i>
        &#32;
        <b>{referral_counter}</b>
        &#32;
        <i>{t('referral:statistic.people', { count: referral_counter })}</i>
        <br />
        <br />
        ------------------------------
        <br />
        <br />
        {t('referral:message')}
        <br />
        <br />
        🤝&#32;
        <i>{t('referral:invitation_bonus')}</i>
        &#32;
        <b>0.005 TON</b>
        &#32;
        <i>{t('common:and')}</i>
        &#32;
        <b>2%*</b>
        <br />
        <br />
        *&#32;
        <i>{t('referral:output_bonus')}</i>
      </>
    );

    return (
      <ButtonGroup isNewMessageEveryRender={false} maxColumns={1} title={title}>
        <Button onClick={switchToSceneReferralInvitation}>
          {t('invite')}
        </Button>
        <Button onClick={switchToSceneReferralLeaders}>
          {t('leaders')}
        </Button>
        <Button onClick={switchToMenuMain}>
          {t('back')}
        </Button>
      </ButtonGroup>
    );
  }

  return null;
};
