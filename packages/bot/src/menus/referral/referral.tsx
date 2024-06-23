import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
import { Error, Loading } from '../../components';
import { useReferral } from './use-referral';

export const Referral = () => {
  const { t } = useTranslation('buttons');
  const { switchToSceneReferralInvitation, switchToMenuMain } = useRouter();
  const {
    user,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  } = useReferral();

  /* ---------- BUTTON HOOKS ---------- */
  const invite = t('invite');
  useText(switchToSceneReferralInvitation, invite);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  if (!isGetCalled || isGetLoading) {
    return <Loading />;
  }

  if (isGetError) {
    return <Error />;
  }

  if (isGetSuccess && user) {
    const title = (
      <>
        <b>{t('referral:title')}</b>
        <br />
        <br />
        <i>{t('referral:statistic.connected', { count: user.referral_counter })}</i>
        &#32;
        <b>{user.referral_counter}</b>
        &#32;
        <i>{t('referral:statistic.people', { count: user.referral_counter })}</i>
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
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
        <Button>{invite}</Button>
        <Button>{back}</Button>
      </ButtonGroup>
    );
  }

  return null;
};
