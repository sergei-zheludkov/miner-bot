import { useState } from 'react';
import type { WithdrawalEntity } from '@common_bot/api';
import { useWithdrawals } from '../../contexts';

export const useWithdrawalController = () => {
  const { withdrawals } = useWithdrawals();
  const [withdrawal, setWithdrawal] = useState<WithdrawalEntity | null>(null);

  const handleOpenWithdrawal = (item: WithdrawalEntity) => setWithdrawal(item);
  const handleResetWithdrawal = () => setWithdrawal(null);

  return {
    withdrawals,
    withdrawal,
    handleOpenWithdrawal,
    handleResetWithdrawal,
  };
};
