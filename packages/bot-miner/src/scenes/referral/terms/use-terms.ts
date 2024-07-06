import { useApi, useQuery } from '@common_bot/api';
import { useBotContext } from '@urban-bot/core';

export const useTerms = () => {
  const { chat } = useBotContext();
  const { getOneUser: getOneUserApi } = useApi().user;

  const {
    data: user,
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  } = useQuery('get_one_user', () => getOneUserApi(chat.id, 'referral_counter'));

  return {
    user,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  };
};
