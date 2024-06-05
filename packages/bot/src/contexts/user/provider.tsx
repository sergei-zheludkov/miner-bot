/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { useBotContext, useCommand } from '@urban-bot/core';
import { useApi, useQuery, predicates } from '@common_bot/api';
// import { useTranslation } from '@common_bot/i18n';
// import { saveChat, getChatsMap } from '../../local-storage';
import { /* ShortRegistration, */ Registration } from '../../scenes';
import { useRouter } from '../router';
import { Context } from './context';
import type { ProviderProps, ContextState } from './types';

const { isNotFoundError } = predicates;

export const UserProvider = ({ children }: ProviderProps) => {
  const [referralId, setReferralId] = useState<ContextState['referralId']>(null);
  // const { i18n } = useTranslation('common');
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

  useCommand(({ argument = '' }) => {
    const { ref } = argument
      .split(':')
      .reduce<Record<string, string>>((acc, arg) => {
        const [key, value] = arg.split('_');

        acc[key] = value;

        return acc;
      }, {});

    if (ref) {
      setReferralId(ref);
    }
    if (isUserLoaded) {
      switchToSceneGreeting();
    }

    getUser();
  }, '/start');

  useEffect(() => {
    // const userInStore = getChatsMap()[chat.id];
    if (user) {
      switchToSceneGreeting();
    }
    // if (!isUserLoaded) {
    //   getUser();
    // }
  }, [user]);

  // useEffect(() => {
  //   saveChat(chat);
  // }, [chat]);

  // useEffect(() => {
  //   if (user) {
  //     i18n.changeLanguage(user?.lang);
  //   }
  // }, [user]);

  if (isUserNotFound) {
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
