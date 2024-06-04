import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
// import { predicates, RoleEnum } from '@common_bot/shared';
import { useRouter } from '../../contexts';

export const Referral = () => {
  const { t } = useTranslation(['buttons']);
  const { switchToSceneReferralInvitation, switchToMenuMain } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const invite = t('invite');
  useText(switchToSceneReferralInvitation, invite);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  const title = (
    <>
      {t('referral:title')}
      <br />
      <br />
      {t('referral:message')}
      <br />
      <br />
      🤝&#32;
      {t('referral:invitation_bonus')}
      &#32;
      <b>0.005 TON</b>
      &#32;
      {t('common:and')}
      &#32;
      <b>5%</b>
      &#32;
      {t('referral:output_bonus')}
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button>{invite}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
