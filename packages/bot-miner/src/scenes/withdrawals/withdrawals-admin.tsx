import React from 'react';
import { WithdrawalStatusEnum } from '@common_bot/shared';
import { useRouter, useWithdrawals } from '../../contexts';
import { Payment } from './item';
import { List } from './list';
import { useWithdrawalController } from './use-withdrawal-controller';
import { usePatchWithdrawal } from './use-patch-withdrawal';
import { Error } from '../../components';

const { PAID, REJECTED } = WithdrawalStatusEnum;

export const WithdrawalsAdmin = () => {
  const { switchToMenuAdmin } = useRouter();
  const { getWithdrawals } = useWithdrawals();
  const {
    withdrawal,
    withdrawals,
    handleOpenWithdrawal,
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
    const handleClickPaid = (comment: string) => () => patchWithdrawals(String(withdrawal.id), PAID, comment);
    const handleClickRejected = (comment: string) => () => patchWithdrawals(String(withdrawal.id), REJECTED, comment);
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
