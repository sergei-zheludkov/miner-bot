import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Rules = () => {
  const { t } = useTranslation('rules');
  const { switchToMenuInformation } = useRouter();

  const title = (
    <>
      <b>{t('title')}</b>
      <br />
      <br />
      -
      &#32;
      {t('multi_accounting')}
      <br />
      -
      &#32;
      {t('fraud')}
      <br />
      -
      &#32;
      {t('breaking')}
      <br />
      -
      &#32;
      {t('minimum')}
      <br />
      -
      &#32;
      {t('withdrawals')}
    </>
  );

  return (
    <ButtonGroup isNewMessageEveryRender={false} maxColumns={1} title={title}>
      <Button onClick={switchToMenuInformation}>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};
