import React from 'react';
import { useRouter } from '../../contexts';
import { useWithdrawalController } from './use-withdrawal-controller';
import { Display } from './item';
import { List } from './list';

export const WithdrawalsUser = () => {
  const { switchToSceneBalance } = useRouter();
  const {
    withdrawal,
    withdrawals,
    handleOpenWithdrawal,
    handleResetWithdrawal,
  } = useWithdrawalController();

  if (withdrawal) {
    return (
      <Display
        withdrawal={withdrawal}
        onBackClick={handleResetWithdrawal}
      />
    );
  }

  return (
    <List
      withdrawals={withdrawals}
      onOpenClick={handleOpenWithdrawal}
      onBackClick={switchToSceneBalance}
    />
  );
};
