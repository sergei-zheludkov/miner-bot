/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import { Error, Loading } from '../../components';
import { Context } from './context';
import type { ProviderProps } from './types';

export const MiningProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const { getOneMining } = useApi().mining;

  const {
    data: mining,
    isCalled: isGetMiningCalled,
    isLoading: isGetMiningLoading,
    isSuccess: isGetMiningSuccess,
    isError: isGetMiningError,
  } = useQuery('get_one_wallet', () => getOneMining(chat.id));

  if (!isGetMiningCalled || isGetMiningLoading) {
    return <Loading isRemoveKeyboard />;
  }

  if (isGetMiningError) {
    return <Error />;
  }

  if (isGetMiningSuccess && mining) {
    return (
      <Context.Provider value={{ mining }}>
        {children}
      </Context.Provider>
    );
  }

  return null;
};
