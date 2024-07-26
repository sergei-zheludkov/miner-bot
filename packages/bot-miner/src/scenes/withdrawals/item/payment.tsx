import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import type { WithdrawalEntity } from '@common_bot/api';

type Props = {
  withdrawal: WithdrawalEntity;
  onBackClick: () => void;
}

export const Payment = ({ withdrawal, onBackClick }: Props) => {
  const { t } = useTranslation('withdrawals');

  const {
    id,
    address,
    amount,
    currency,
    status,
    comment,
  } = withdrawal;

  const commentComponent = comment
    ? (
      <>
        <br />
        <br />
        {t('comment')}
        &#32;
        {comment}
      </>
    )
    : null;

  const title = (
    <>
      {t('request')}
      &#32;
      <b>{id}</b>
      <br />
      <br />
      {t('address')}
      &#32;
      {address}
      <br />
      {t('amount')}
      &#32;
      <b>{amount}</b>
      &#32;
      {currency.toUpperCase()}
      <br />
      <br />
      {t('status.title')}
      &#32;
      {t(`status.${status}`)}
      {commentComponent}
    </>
  );

  const backButton = [
    <Button key="back-to-withdrawal-list" onClick={onBackClick}>
      {t('buttons:back')}
    </Button>,
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {backButton}
    </ButtonGroup>
  );
};
