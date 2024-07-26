import React from 'react';
import { Text, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { Input } from './input';
import { usePayroll } from './use-payroll';
import { useRouter } from '../../../contexts';

export const Payroll = () => {
  const { t } = useTranslation('users');
  const { switchToSceneUsersController } = useRouter();
  const {
    amount,
    wallet,
    isPatchWalletLoading,
    isPatchWalletError,
    handleConfirmAmount,
  } = usePayroll();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('buttons:back');
  useText(switchToSceneUsersController, back);

  if (isPatchWalletLoading) {
    return null;
  }

  if (isPatchWalletError) {
    return <Text>{t('payroll.input.error')}</Text>;
  }

  if (!amount) {
    return <Input onConfirm={handleConfirmAmount} />;
  }

  if (!wallet) {
    return null;
  }

  return (
    <Text>
      {t('payroll.input.success', { amount })}
      &#32;
      <b>{wallet.ton_amount}</b>
      &#32;
      TON
    </Text>
  );
};
