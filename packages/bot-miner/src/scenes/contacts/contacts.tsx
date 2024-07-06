import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
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

  return (
    <ButtonGroup isNewMessageEveryRender={false} maxColumns={1} title={title}>
      <Button onClick={switchToMenuInformation}>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};
