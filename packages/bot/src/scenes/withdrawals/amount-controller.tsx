import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

type OnCLick = Parameters<typeof Button>[0]['onClick'];

type Props = {
  currency: string;
  amount: string;
  available: string;
  onIncrease: OnCLick;
  onDecrease: OnCLick;
  onMax: () => void;
  onConfirm: () => void;
}

export const AmountController = ({
  currency,
  amount,
  available,
  onMax,
  onIncrease,
  onDecrease,
  onConfirm,
}: Props) => {
  const { t } = useTranslation('withdrawals');

  const title = (
    <>
      {t('amount_controller.message')}
      <br />
      <br />
      {t('amount_controller.available')}
      &#32;
      <b>{available}</b>
      &#32;
      {currency}
    </>
  );

  const amountButton = [
    <Button key="amount">
      {`${t('amount_controller.withdrawn')} ${amount} ${currency}`}
    </Button>,
  ];

  const controlButtons = [
    <Button key="decrease" onClick={onDecrease}>
      ➖
    </Button>,
    <Button key="max" onClick={onMax}>
      MAX
    </Button>,
    <Button key="increase" onClick={onIncrease}>
      ➕
    </Button>,
  ];

  const confirmButton = [
    <Button key="ready" onClick={onConfirm}>
      {t('buttons:ready')}
    </Button>,
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {amountButton}
      {controlButtons}
      {confirmButton}
    </ButtonGroup>
  );
};
