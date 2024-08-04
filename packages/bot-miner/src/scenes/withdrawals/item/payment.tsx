import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { WithdrawalStatusEnum, PREDICATES } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import type { WithdrawalEntity } from '@common_bot/api';
import { Comment, useComment } from '../comment';

const { isConfirmed } = PREDICATES.WITHDRAWAL_STATUSES;

type Props = {
  withdrawal: WithdrawalEntity;
  onClickBack: () => void;
  onClickPaid: (comment: string) => () => void;
  onClickRejected: (comment: string) => () => void;
}

export const Payment = ({
  withdrawal, onClickBack, onClickPaid, onClickRejected,
}: Props) => {
  const { t } = useTranslation('withdrawals');
  const {
    open,
    comment,
    handleOpenInput,
    handleCloseInput,
    handleChangeComment,
  } = useComment();

  if (open) {
    return (
      <Comment
        comment={comment}
        onClickBack={handleCloseInput}
        onChange={handleChangeComment}
      />
    );
  }

  const {
    id,
    address,
    amount,
    currency,
    status,
  } = withdrawal;

  const commentText = withdrawal.comment
    ? (
      <>
        <br />
        <br />
        {t('comment.title')}
        :&#32;
        {withdrawal.comment}
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
      {commentText}
    </>
  );

  const commentButton = isConfirmed(status) ? [
    <Button key="comment" onClick={handleOpenInput}>
      {`${t('comment.title')} ${comment ? '💬' : '🗨️'}`}
    </Button>,
  ] : [];

  const paidButton = isConfirmed(status) ? [
    <Button key="paid" onClick={onClickPaid(comment)}>
      {t(`status.${WithdrawalStatusEnum.PAID}`)}
    </Button>,
  ] : [];

  const rejectedButton = isConfirmed(status) ? [
    <Button key="rejected" onClick={onClickRejected(comment)}>
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
      {commentButton}
      {paidButton}
      {rejectedButton}
      {backButton}
    </ButtonGroup>
  );
};
