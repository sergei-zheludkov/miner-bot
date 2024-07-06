/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { UrbanChat, useBotContext, useCommand } from '@urban-bot/core';
import {
  useApi,
  useQuery,
  predicates,
  UserEntity,
} from '@common_bot/api';
import { CONSTANTS } from '@common_bot/shared';
import { saveChat, getChat } from '../../local-storage';
import { /* ShortRegistration, */ Registration, Reset } from '../../scenes';
import { useRouter } from '../router';
import { Context } from './context';
import { getStartQueryParams } from './helpers';
import type { ProviderProps, ContextState } from './types';

const { isNotFoundError } = predicates;
const { ADMIN_IDS } = CONSTANTS;

export const UserProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const [userInStore, setUser] = useState<UrbanChat | null>(getChat(chat.id));
  const [referralId, setReferralId] = useState<ContextState['referralId']>(null);
  // const { i18n } = useTranslation('common');
  const { switchToSceneGreeting } = useRouter();
  const { getOneUserAndToggles: getOneUserAndTogglesApi } = useApi().user;
  const {
    data,
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    statusCode: getStatusCode,
    fetch: getUser,
    error,
  } = useQuery(
    'get_one_user',
    () => getOneUserAndTogglesApi(chat.id),
    { isLazy: true },
  );

  const user = data?.user;

  const isUserNotFound = isGetCalled && isGetError && isNotFoundError(getStatusCode);
  const isUserLoaded = isGetCalled && !isGetLoading && isGetSuccess && !!data;

  useCommand(async ({ argument = '' }) => {
    const { ref } = getStartQueryParams(argument);

    if (ref) {
      setReferralId(ref);
    }

    // Юзер загружен, есть в Local и уже активен
    if (user && userInStore) {
      if (ADMIN_IDS.includes(chat.id)) {
        console.log('1. THE USER IS LOADED, IS IN LOCAL AND IS ALREADY ACTIVE', '\nUSER:\n', user, '\nUSER IN STORE:\n', userInStore);
      }

      switchToSceneGreeting();
      return;
    }

    // Юзер загружен, нет в Local и уже активен
    if (user && !userInStore) {
      if (ADMIN_IDS.includes(chat.id)) {
        console.log('2. THE USER IS LOADED, NOT IN LOCAL AND ALREADY ACTIVE', '\nUSER:\n', user, '\nUSER IN STORE:\n', userInStore);
      }

      setUser(chat);
      switchToSceneGreeting();
      return;
    }

    let user_data: UserEntity | undefined;

    if (!isGetCalled) {
      user_data = (await getUser()).data?.user;
    }

    // Юзер есть в DB и в Local и стоит на reset
    if (user_data && userInStore) {
      if (ADMIN_IDS.includes(chat.id)) {
        console.log('3. THE USER IS IN DB AND LOCAL AND IS SET TO RESET', '\nUSER_DATA:\n', user_data, '\nUSER IN STORE:\n', userInStore);
      }

      switchToSceneGreeting();
      return;
    }

    // Юзер есть в DB, но нет в Local
    if (user_data && !userInStore) {
      if (ADMIN_IDS.includes(chat.id)) {
        console.log('4. THE USER IS IN DB, BUT NOT IN LOCAL', '\nUSER_DATA:\n', user_data, '\nUSER IN STORE:\n', userInStore);
      }

      saveChat(chat);
      setUser(chat);
      switchToSceneGreeting();
      return;
    }

    if (ADMIN_IDS.includes(chat.id)) {
      console.log(
        '5. NONE OF THE CASES WORKED',
        '\nUSER:\n',
        user,
        '\nUSER IN STORE:\n',
        userInStore,
        '\nREQUEST DATA:\n',
        {
          isGetCalled,
          isGetLoading,
          isGetSuccess,
          isGetError,
          getStatusCode,
          error,
        },
      );
    }
  }, '/start');

  // useEffect(() => {
  //   if (user) {
  //     i18n.changeLanguage(user?.lang);
  //   }
  // }, [user]);

  if (isUserNotFound) {
    return <Registration refId={referralId} getUser={getUser} />;
  }

  if (!isGetCalled && userInStore) {
    return <Reset getUser={getUser} />;
  }

  if (isUserLoaded) {
    return (
      <Context.Provider
        value={{
          referralId,
          ...data,

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
