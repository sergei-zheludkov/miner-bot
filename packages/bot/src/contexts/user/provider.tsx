/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { saveChat, getChatsMap } from '../../local-storage';
import { /* ShortRegistration, */ Registration } from '../../scenes';
import { useRouter } from '../router';
import { Context } from './context';
import type { ProviderProps, ContextState } from './types';

const { isNotFoundError } = predicates;

export const UserProvider = ({ children }: ProviderProps) => {
  const [referralId, setReferralId] = useState<ContextState['referralId']>(null);
  const { i18n } = useTranslation('common');
  const { switchToSceneGreeting } = useRouter();
  const { chat } = useBotContext();
  const { getOneUser: getOneUserApi } = useApi().user;
  const {
    data: user,
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    statusCode: getStatusCode,
    fetch: getUser,
  } = useQuery(
    'get_one_user',
    () => getOneUserApi(chat.id),
    { isLazy: true },
  );

  const isUserNotFound = isGetCalled && isGetError && isNotFoundError(getStatusCode);
  const isUserLoaded = isGetCalled && !isGetLoading && isGetSuccess && !!user;

  useCommand(({ argument }) => {
    if (argument) {
      setReferralId(argument);
    }
    if (isUserLoaded) {
      switchToSceneGreeting();
    }

    getUser();
  }, '/start');

  useEffect(() => {
    const userInStore = getChatsMap()[chat.id];
    if (userInStore) {
      switchToSceneGreeting();
    }
    if (!isUserLoaded) {
      getUser();
    }
  }, []);

  useEffect(() => {
    saveChat(chat);
  }, [chat]);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.lang);
    }
  }, [user]);

  if (isUserNotFound) {
    // TODO add feature-toggle for changing scenarios
    // return <ShortRegistration refId={referralId} getUser={getUser} />;
    return <Registration refId={referralId} getUser={getUser} />;
  }

  if (isUserLoaded) {
    return (
      <Context.Provider
        value={{
          referralId,
          user,

          isGetCalled,
          isGetLoading,
          isGetSuccess,
          isGetError,
          getStatusCode,
          getUser,
        }}
      >
        {children}
      </Context.Provider>
    );
  }

  return null;
};
