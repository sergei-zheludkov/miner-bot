import { useApi, useQuery } from '@common_bot/api';

export const useUsersControl = () => {
  const { getOneUser: getOneUserApi } = useApi().user;

  const {
    data: user,
    isCalled: isGetUserCalled,
    isLoading: isGetUserLoading,
    isSuccess: isGetUserSuccess,
    isError: isGetUserError,
    statusCode: getUserStatusCode,
    fetch: getUser,
  } = useQuery(
    'get_one_user_in_user_control',
    (id: string) => getOneUserApi(id),
    { isLazy: true },
  );

  const handleConfirmInput = (userId: string) => {
    getUser(userId);
  };

  return { user, handleConfirmInput };
};
