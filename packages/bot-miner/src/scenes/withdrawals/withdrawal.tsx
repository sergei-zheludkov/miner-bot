import React from 'react';
import { useText } from '@urban-bot/core';
import { CurrencyEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
import { Error } from '../../components';
import { Reset } from '../reset';
import { useWithdrawal } from './use-withdrawal';
import { AddressInput } from './address-input';
import { AmountController } from './amount-controller';
import { Confirmation } from './confirmation';
import { Success } from './success';

const TON = CurrencyEnum.TON.toUpperCase();

export const Withdrawal = () => {
  const { t } = useTranslation('buttons');
  const { switchToSceneBalance } = useRouter();
  const {
    address,
    amount,
    maxAmount,
    withdrawal,
    isConfirmedAmount,
    isPostCalled,
    isPostSuccess,
    isPostError,
    handleAddAddress,
    handleMaxAmount,
    handleIncreaseAmount,
    handleDecreaseAmount,
    handleClickConfirm,
    handleConfirmAmount,
  } = useWithdrawal();

  const exit = t('exit');
  useText(switchToSceneBalance, exit);

  if (!address) {
    return (
      <AddressInput
        currency={TON}
        onConfirm={handleAddAddress}
      />
    );
  }

  if (!isConfirmedAmount) {
    return (
      <AmountController
        currency={TON}
        amount={amount}
        available={maxAmount}
        onMax={handleMaxAmount}
        onIncrease={handleIncreaseAmount}
        onDecrease={handleDecreaseAmount}
        onConfirm={handleConfirmAmount}
      />
    );
  }

  if (!isPostCalled) {
    return (
      <Confirmation
        address={address}
        amount={amount}
        currency={TON}
        onConfirm={handleClickConfirm(CurrencyEnum.TON)}
      />
    );
  }

  if (isPostError) {
    return <Error />;
  }

  if (isPostSuccess && withdrawal) {
    return <Success withdrawal={withdrawal} />;
  }

  return <Reset />;
};
