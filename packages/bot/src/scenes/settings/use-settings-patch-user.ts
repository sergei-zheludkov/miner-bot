import { useApi, useQuery } from '@common_bot/api';

const useSettingsPatchUser = () => {
  const { patchUser: patchUserApi } = useApi().user;
  const {
    isCalled: isPatchCalled,
    isLoading: isPatchLoading,
    isSuccess: isPatchSuccess,
    isError: isPatchError,
    statusCode: patchStatusCode,
    fetch: patchUser,
  } = useQuery('update_user', patchUserApi, { isLazy: true });

  return {
    isPatchCalled,
    isPatchLoading,
    isPatchSuccess,
    isPatchError,
    patchStatusCode,
    patchUser,
  };
};

export { useSettingsPatchUser };
