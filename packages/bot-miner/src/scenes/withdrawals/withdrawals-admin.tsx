import React from 'react';
import { WithdrawalStatusEnum } from '@common_bot/shared';
import { useRouter, useWithdrawals } from '../../contexts';
import { Payment } from './item';
import { List } from './list';
import { useWithdrawalController } from './use-withdrawal-controller';
import { usePatchWithdrawal } from './use-patch-withdrawal';
import { Error } from '../../components';

export const WithdrawalsAdmin = () => {
  const { switchToMenuAdmin } = useRouter();
  const { getWithdrawals } = useWithdrawals();
  const {
    withdrawal,
    withdrawals,
    handleOpenWithdrawal,
    handleResetWithdrawal,
  } = useWithdrawalController();

  const {
    updatedWithdrawal,
    isPatchWithdrawalsError,
    patchWithdrawals,
  } = usePatchWithdrawal();

  if (isPatchWithdrawalsError) {
    return <Error />;
  }

  if (withdrawal) {
    const handleClickPaid = () => patchWithdrawals(String(withdrawal.id), WithdrawalStatusEnum.PAID);
    const handleClickRejected = () => patchWithdrawals(String(withdrawal.id), WithdrawalStatusEnum.REJECTED);
    const handleClickBack = () => getWithdrawals();

    return (
      <Payment
        withdrawal={updatedWithdrawal ?? withdrawal}
        onClickPaid={handleClickPaid}
        onClickRejected={handleClickRejected}
        onClickBack={handleClickBack}
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
