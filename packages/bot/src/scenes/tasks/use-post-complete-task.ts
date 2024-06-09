import { useApi, useQuery } from '@common_bot/api';
import type { CompletedTasksCreateDto } from '@common_bot/api';

export const usePostCompleteTask = () => {
  const { postCompleteTasks: postCompleteTasksApi } = useApi().task;

  const {
    // data: completedTask,
    isCalled: isPostCalled,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    statusCode: postStatusCode,
    fetch: postCompleteTask,
    reset: postReset,
  } = useQuery(
    'post_complete_task',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (...arg: [string, CompletedTasksCreateDto]) => postCompleteTasksApi(...arg),
    { isLazy: true },
  );

  return {
    isPostCalled,
    isPostLoading,
    isPostSuccess,
    isPostError,
    postStatusCode,
    postCompleteTask,
    postReset,
  };
};
