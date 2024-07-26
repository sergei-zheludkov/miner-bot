import React from 'react';
import { useRouter } from '../../contexts';
import { useWithdrawalController } from './use-withdrawal-controller';
import { Payment } from './item';
import { List } from './list';

export const WithdrawalsAdmin = () => {
  const { switchToMenuAdmin } = useRouter();
  const {
    withdrawal,
    withdrawals,
    handleOpenWithdrawal,
    handleResetWithdrawal,
  } = useWithdrawalController();

  if (withdrawal) {
    return (
      <Payment
        withdrawal={withdrawal}
        onBackClick={handleResetWithdrawal}
      />
    );
  }

  return (
    <List
      withdrawals={withdrawals}
      onOpenClick={handleOpenWithdrawal}
      onBackClick={switchToMenuAdmin}
    />
  );
};
