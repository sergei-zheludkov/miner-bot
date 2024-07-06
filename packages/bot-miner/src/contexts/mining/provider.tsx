/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
import { Error, Loading } from '../../components';
import { Context } from './context';
import type { ProviderProps } from './types';

const { isNotFoundError } = predicates;

export const MiningProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const {
    getOneMining: getOneMiningApi,
    postMining: postMiningApi,
    patchMining: patchMiningApi,
  } = useApi().mining;

  const {
    data: mining,
    isCalled: isGetMiningCalled,
    isLoading: isGetMiningLoading,
    isSuccess: isGetMiningSuccess,
    isError: isGetMiningError,
    statusCode: getStatusCode,
  } = useQuery('get_one_mining', () => getOneMiningApi(chat.id));

  const {
    isCalled: isPostMiningCalled,
    isLoading: isPostMiningLoading,
    isSuccess: isPostMiningSuccess,
    isError: isPostMiningError,
    fetch: postMining,
  } = useQuery('post_mining', postMiningApi, { isLazy: true });

  const {
    isCalled: isPatchMiningCalled,
    isLoading: isPatchMiningLoading,
    isSuccess: isPatchMiningSuccess,
    isError: isPatchMiningError,
    fetch: patchMining,
  } = useQuery('patch_mining', patchMiningApi, { isLazy: true });

  if (!isGetMiningCalled || isGetMiningLoading) {
    return <Loading isRemoveKeyboard />;
  }

  const isError = (isGetMiningError && !isNotFoundError(getStatusCode))
    || isPostMiningError
    || isPatchMiningError;

  if (isError) {
    return <Error />;
  }

  return (
    <Context.Provider
      value={{
        mining,

        isGetMiningSuccess,

        isPostMiningCalled,
        isPostMiningLoading,
        isPostMiningSuccess,

        isPatchMiningCalled,
        isPatchMiningLoading,
        isPatchMiningSuccess,

        postMining,
        patchMining,
      }}
    >
      {children}
    </Context.Provider>
  );
};
