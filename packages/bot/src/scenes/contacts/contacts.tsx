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
      @crypto_bot_owner
    </>
  );

  // const back = t('buttons:back');
  // useText(switchToMenuInformation, back);

  return (
    <ButtonGroup isNewMessageEveryRender={false} maxColumns={1} title={title}>
      <Button onClick={switchToMenuInformation}>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};
