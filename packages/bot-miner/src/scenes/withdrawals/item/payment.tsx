import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { WithdrawalStatusEnum, PREDICATES } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import type { WithdrawalEntity } from '@common_bot/api';

const { isConfirmed } = PREDICATES.WITHDRAWAL_STATUSES;

type Props = {
  withdrawal: WithdrawalEntity;
  onClickBack: () => void;
  onClickPaid: () => void;
  onClickRejected: () => void;
}

export const Payment = ({
  withdrawal, onClickBack, onClickPaid, onClickRejected,
}: Props) => {
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

  const paidButton = isConfirmed(status) ? [
    <Button key="paid" onClick={onClickPaid}>
      {t(`status.${WithdrawalStatusEnum.PAID}`)}
    </Button>,
  ] : [];

  const rejectedButton = isConfirmed(status) ? [
    <Button key="rejected" onClick={onClickRejected}>
      {t(`status.${WithdrawalStatusEnum.REJECTED}`)}
    </Button>,
  ] : [];

  const backButton = [
    <Button key="back-to-withdrawal-list" onClick={onClickBack}>
      {t('buttons:back')}
    </Button>,
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {paidButton}
      {rejectedButton}
      {backButton}
    </ButtonGroup>
  );
};
