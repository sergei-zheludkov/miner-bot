import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

type Props = {
  address: string;
  currency: string;
  amount: string;
  onConfirm: () => void;
}

export const Confirmation = ({
  address, amount, currency, onConfirm,
}: Props) => {
  const { t } = useTranslation('withdrawals');

  const title = (
    <>
      <b>{t('confirmation.title')}</b>
      <br />
      <br />
      {t('confirmation.on_address')}
      &#32;
      <b>{address}</b>
      <br />
      {t('confirmation.amount')}
      &#32;
      <b>{amount}</b>
      <br />
      {t('confirmation.currency')}
      &#32;
      <b>{currency}</b>
      <br />
      <br />
      <i>{t('confirmation.description_block_amount')}</i>
      <br />
      <i>{t('confirmation.description_consideration')}</i>
    </>
  );

  const confirmButton = [
    <Button key="ready" onClick={onConfirm}>
      {t('buttons:confirm')}
    </Button>,
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {confirmButton}
    </ButtonGroup>
  );
};
