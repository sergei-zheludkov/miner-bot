/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import { Error, Loading } from '../../components';
import { Context } from './context';
import type { ProviderProps } from './types';

export const WalletProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const { getOneWallet } = useApi().wallet;

  const {
    data: wallet,
    isCalled: isGetWalletCalled,
    isLoading: isGetWalletLoading,
    isSuccess: isGetWalletSuccess,
    isError: isGetWalletError,
  } = useQuery('get_one_wallet', () => getOneWallet(chat.id));

  if (!isGetWalletCalled || isGetWalletLoading) {
    return <Loading isRemoveKeyboard />;
  }

  if (isGetWalletError) {
    return <Error />;
  }

  if (isGetWalletSuccess && wallet) {
    return (
      <Context.Provider value={{ wallet }}>
        {children}
      </Context.Provider>
    );
  }

  return null;
};
