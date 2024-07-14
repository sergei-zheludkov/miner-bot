/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useApi, useQuery } from '@common_bot/api';
import { Error, Loading } from '../../components';
import { Context } from './context';
import type { ProviderProps } from './types';

export const WithdrawalsProvider = ({
  children, status, userId, sort,
}: ProviderProps) => {
  const { getWithdrawals } = useApi().withdrawal;

  const {
    data,
    isCalled: isGetWithdrawalsCalled,
    isLoading: isGetWithdrawalsLoading,
    isSuccess: isGetWithdrawalsSuccess,
    isError: isGetWithdrawalsError,
  } = useQuery(
    'get_withdrawals',
    () => getWithdrawals(status, userId, sort),
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
      <Context.Provider value={{ withdrawals }}>
        {children}
      </Context.Provider>
    );
  }

  return null;
};
