import { useApi, useQuery } from '@common_bot/api';

export const useUsersStatistics = () => {
  const { getUsersStatistics: getUsersStatisticsApi } = useApi().user;

  const {
    data: statistics,
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  } = useQuery(
    'get_users_statistics',
    getUsersStatisticsApi,
  );

  return {
    statistics,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
  };
};
