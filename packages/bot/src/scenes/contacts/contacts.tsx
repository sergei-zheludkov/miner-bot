import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Contacts = () => {
  const { t } = useTranslation('contacts');
  const { switchToMenuInformation } = useRouter();

  const title = (
    <>
      <b>{t('title')}</b>
      <br />
      <br />
      {t('advertisement')}
      &#32;
      @pizdohan
    </>
  );

  const back = t('buttons:back');
  useText(switchToMenuInformation, back);

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
