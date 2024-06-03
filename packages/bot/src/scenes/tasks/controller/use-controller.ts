import { useState } from 'react';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { PlacementEnum } from '@common_bot/shared';
import { useApi, useQuery } from '@common_bot/api';
import { useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useUser } from '../../../contexts';

export const useController = () => {
  const { t } = useTranslation('common');
  const { user } = useUser();
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { getTasks: getTasksApi, postCompleteTasks: postCompleteTasksApi } = useApi().task;

  const {
    data: tasks = [],
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    statusCode: getStatusCode,
  } = useQuery('get_tasks', () => getTasksApi(
    user.country,
    PlacementEnum.TASK_LIST,
    user.gender,
    'active',
    0,
    100,
  ));

  const {
    data: completedTask,
    isCalled: isPostCalled,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    statusCode: postStatusCode,
    fetch: postCompleteTask,
    reset,
  } = useQuery('post_complete_task', postCompleteTasksApi, { isLazy: true });

  const [taskNumber, setTaskNumber] = useState(0);

  const isEmptyList = !tasks.length;

  const handleClickPrev = () => {
    setTaskNumber((prev) => (prev - 1 < 0 - 1 ? tasks.length - 1 : prev - 1));

    if (isPostSuccess) {
      reset();
    }
  };

  const handleClickNext = () => {
    setTaskNumber((prev) => (prev + 1 > tasks.length - 1 ? 0 : prev + 1));

    if (isPostSuccess) {
      reset();
    }
  };

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickReady = async (message: any) => {
    const channel_id = Number(tasks[taskNumber].check_key);
    const checkRequests = await bot.client.getChatMember(channel_id, user.id);

    if (checkRequests.status === 'left') {
      // TODO метод answerCallbackQuery в библиотеку urban-bot
      const options = { text: t('conditions_not_met'), show_alert: true };

      await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);

      return;
    }

    if (!isPostCalled) {
      const data = { user_id: user.id, task_id: tasks[taskNumber].id };

      await postCompleteTask([data]);
    }
  };

  return {
    tasks,
    taskNumber,
    isEmptyList,
    isGetLoading,
    isGetSuccess,
    isPostSuccess,
    handleClickPrev,
    handleClickNext,
    handleClickReady,
  };
};
