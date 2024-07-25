/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { Text } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { Loading } from '../../../components';
import { Context } from './context';
import { Input } from './input';
import type { ProviderProps } from './types';

export const Provider = ({ children }: ProviderProps) => {
  const { t } = useTranslation('users');
  const { getOneUser: getOneUserApi } = useApi().user;

  const {
    data: user,
    isCalled: isGetUserCalled,
    isLoading: isGetUserLoading,
    isSuccess: isGetUserSuccess,
    isError: isGetUserError,
    // statusCode: getUserStatusCode,
    fetch: getUser,
  } = useQuery(
    'get_one_user',
    (id: string) => getOneUserApi(id),
    { isLazy: true },
  );

  const handleConfirmUserId = (userId: string) => getUser(userId);

  if (isGetUserLoading) {
    return <Loading />;
  }

  if (isGetUserError) {
    return <Text>{t('controller.input.error')}</Text>;
  }

  if (!user) {
    return <Input onConfirm={handleConfirmUserId} />;
  }

  return (
    <Context.Provider
      value={{
        user,
        isGetUserCalled,
        isGetUserLoading,
        isGetUserSuccess,
        isGetUserError,
      }}
    >
      {children}
    </Context.Provider>
  );
};
