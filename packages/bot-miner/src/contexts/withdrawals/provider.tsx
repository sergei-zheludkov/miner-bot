/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useApi, useQuery } from '@common_bot/api';
import { Error, Loading } from '../../components';
import { Context } from './context';
import type { ProviderProps } from './types';

export const WithdrawalsProvider = ({
  children, status, userId, sort,
}: ProviderProps) => {
  const { getWithdrawals: getWithdrawalsApi } = useApi().withdrawal;

  const {
    data,
    isCalled: isGetWithdrawalsCalled,
    isLoading: isGetWithdrawalsLoading,
    isSuccess: isGetWithdrawalsSuccess,
    isError: isGetWithdrawalsError,
    fetch: getWithdrawals,
  } = useQuery(
    'get_withdrawals',
    () => getWithdrawalsApi(status, userId, sort),
  );

  if (!isGetWithdrawalsCalled || isGetWithdrawalsLoading) {
    return <Loading isRemoveKeyboard />;
  }

  if (isGetWithdrawalsError) {
    return <Error />;
  }

  if (isGetWithdrawalsSuccess && data) {
    const { withdrawals } = data;

    return (
      <Context.Provider
        value={{
          withdrawals,
          isGetWithdrawalsCalled,
          isGetWithdrawalsLoading,
          isGetWithdrawalsSuccess,
          isGetWithdrawalsError,
          getWithdrawals,
        }}
      >
        {children}
      </Context.Provider>
    );
  }

  return null;
};
