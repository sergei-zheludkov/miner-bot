import React from 'react';
import { useWithdrawalController } from './use-withdrawal-controller';
import { OpenedWithdrawal } from './opened-withdrawal';
import { WithdrawalList } from './withdrawal-list';

export const WithdrawalListController = () => {
  const {
    withdrawal,
    withdrawals,
    handleOpenWithdrawal,
    handleResetWithdrawal,
  } = useWithdrawalController();

  if (withdrawal) {
    return (
      <OpenedWithdrawal
        withdrawal={withdrawal}
        onBackClick={handleResetWithdrawal}
      />
    );
  }

  return (
    <WithdrawalList
      withdrawals={withdrawals}
      onOpenClick={handleOpenWithdrawal}
    />
  );
};
