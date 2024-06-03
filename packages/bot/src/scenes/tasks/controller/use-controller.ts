import { useApi, useQuery } from '@common_bot/api';
import { GenderEnum, PlacementEnum } from '@common_bot/shared';
import { useEffect, useState } from 'react';
import { useUser } from '../../../contexts';

export const useController = () => {
  const { user } = useUser();
  const { getTasks: getTasksApi } = useApi().task;
  const {
    data: tasksForAllGenders = [],
    isCalled: isGetAllGendersCalled,
    isLoading: isGetAllGendersLoading,
    isSuccess: isGetAllGendersSuccess,
    isError: isGetAllGendersError,
    statusCode: getAllGendersStatusCode,
    fetch: getAllGendersTasks,
  } = useQuery('get_tasks', () => getTasksApi(
    user.country,
    PlacementEnum.TASK_LIST,
    GenderEnum.ALL,
    'active',
    0,
    100,
  ), { isLazy: true });

  const {
    data: tasksForUseGender = [],
    isCalled: isGetUserGenderCalled,
    isLoading: isGetUserGenderLoading,
    isSuccess: isGetUserGenderSuccess,
    isError: isGetUserGenderError,
    statusCode: getUserGenderStatusCode,
    fetch: getUserGenderTasks,
  } = useQuery('get_tasks', () => getTasksApi(
    user.country,
    PlacementEnum.TASK_LIST,
    user.gender,
    'active',
    0,
    100,
  ), { isLazy: true });

  const [taskNumber, setTaskNumber] = useState(0);

  const tasks = [...tasksForAllGenders, ...tasksForUseGender]
    .sort(({ id: a }, { id: b }) => Number(a) - Number(b));

  const isLoading = isGetAllGendersLoading || isGetUserGenderLoading;
  const isSuccess = isGetAllGendersSuccess || isGetUserGenderSuccess;
  const isEmptyList = !tasks.length;

  const handleClickPrev = () => {
    setTaskNumber((prev) => (prev - 1 < 0 - 1 ? tasks.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setTaskNumber((prev) => (prev + 1 > tasks.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (user.mining_rate_started) {
      // TODO оптимизировать через дополнительный стейт
      getAllGendersTasks();
      getUserGenderTasks();
    }
  }, []);

  return {
    tasks,
    taskNumber,
    isEmptyList,
    isLoading,
    isSuccess,
    handleClickPrev,
    handleClickNext,
  };
};
