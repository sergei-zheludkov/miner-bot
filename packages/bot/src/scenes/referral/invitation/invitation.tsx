import React from 'react';
import {
  Button, ButtonGroup, Text, useText,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../../contexts';
import { useInvitation } from './use-invitation';

export const Invitation = () => {
  const { t } = useTranslation(['referral']);
  const { switchToMenuMain } = useRouter();
  const { user } = useUser();
  const { name } = useInvitation();

  const back = t('buttons:back');
  useText(switchToMenuMain, back);

  if (!name) {
    // TODO в отдельный компонент
    return (
      <Text isNewMessageEveryRender={false}>
        🤖
        &#32;
        {t('common:loading')}
      </Text>
    );
  }

  if (name === 'ERROR') {
    return (
      <Text isNewMessageEveryRender={false}>
        Что-то пошло не так
      </Text>
    );
  }

  const inviteLink = `https://t.me/${name}?start=ref_${user.id}`;

  const invitationTitle = (
    <>
      {t('invitation.message')}
      <br />
      <br />
      <a href={inviteLink}>
        {t('invitation.link_title')}
      </a>
      <br />
      <br />
      <i>{t('invitation.bonus_prefix')}</i>
      <b>&#32;0.005 TON&#32;</b>
      <i>{t('invitation.bonus_postfix')}</i>
    </>
  );

  return (
    <>
      <Text isNewMessageEveryRender={false}>
        <b>{t('invitation.title')}</b>
      </Text>
      <ButtonGroup
        isReplyButtons
        isResizedKeyboard
        title={invitationTitle}
        simulateTyping={2000}
        maxColumns={1}
      >
        <Button>{back}</Button>
      </ButtonGroup>
    </>
  );
};
