import { useApi, useQuery } from '@common_bot/api';
import type { WithdrawalUpdateDto } from '@common_bot/api';

export const usePatchWithdrawal = () => {
  const { updateWithdrawal } = useApi().withdrawal;

  const {
    data: updatedWithdrawal,
    isCalled: isPatchWithdrawalsCalled,
    isLoading: isPatchWithdrawalsLoading,
    isSuccess: isPatchWithdrawalsSuccess,
    isError: isPatchWithdrawalsError,
    fetch: patchWithdrawals,
  } = useQuery(
    'get_withdrawals',
    (withdrawalId: string, newStatus: string, commentText: string) => {
      const id = Number(withdrawalId);
      const status = newStatus as unknown as WithdrawalUpdateDto['status'];
      const comment = commentText || undefined;

      return updateWithdrawal({ id, status, comment });
    },
    { isLazy: true },
  );

  return {
    updatedWithdrawal,
    isPatchWithdrawalsCalled,
    isPatchWithdrawalsLoading,
    isPatchWithdrawalsSuccess,
    isPatchWithdrawalsError,
    patchWithdrawals,
  };
};
