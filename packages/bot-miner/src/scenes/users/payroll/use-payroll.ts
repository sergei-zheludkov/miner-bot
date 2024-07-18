import { useState } from 'react';
import { useApi, useQuery } from '@common_bot/api';
import { CurrencyEnum } from '@common_bot/shared';
import type { WalletUpdateDto } from '@common_bot/api';

// Такой финт из-за кривой генерации enum в @common_bot/api
const currency = CurrencyEnum.TON as unknown as WalletUpdateDto['currency'];
const operation = 'increase';

export const useControl = () => {
  const { patchWallet: patchWalletApi } = useApi().wallet;

  const {
    data: user,
    isCalled: isGetUserCalled,
    isLoading: isGetUserLoading,
    isSuccess: isGetUserSuccess,
    isError: isGetUserError,
    statusCode: getUserStatusCode,
    fetch: getUser,
  } = useQuery(
    'get_one_user_in_user_control',
    (id: string, amount: string) => patchWalletApi({
      id,
      operation,
      currency,
      amount,
    }),
    { isLazy: true },
  );

  const handleConfirmInput = (userId: string) => {
    getUser(userId);
  };

  return {
    user,
    handleConfirmInput,
    isGetUserCalled,
    isGetUserLoading,
    isGetUserSuccess,
    isGetUserError,
    getUserStatusCode,
  };
};
