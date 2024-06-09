import { useState } from 'react';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { PlacementEnum } from '@common_bot/shared';
import { useApi, useQuery } from '@common_bot/api';
import { useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../../contexts';
import { usePostCompleteTask } from '../use-post-complete-task';

export const useController = () => {
  const { t } = useTranslation('common');
  const { switchToMenuMain } = useRouter();
  const { user, getUser } = useUser();
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { getTasks: getTasksApi } = useApi().task;
  const {
    isPostCalled,
    isPostSuccess,
    isPostError,
    postCompleteTask,
    postReset,
  } = usePostCompleteTask();

  const {
    data: tasks = [],
    // isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    // statusCode: getStatusCode,
    fetch: getTasks,
  } = useQuery('get_tasks', () => getTasksApi(
    user.id,
    user.country,
    PlacementEnum.TASK_LIST,
    user.gender,
    'active',
    0,
    100,
  ));

  const [taskNumber, setTaskNumber] = useState(0);

  const isEmptyList = !tasks.length;

  const handleClickPrev = () => {
    setTaskNumber((prev) => (prev - 1 < 0 ? tasks.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setTaskNumber((prev) => (prev + 1 > tasks.length - 1 ? 0 : prev + 1));
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
      const task = tasks[taskNumber];

      const data = {
        tasks: [task.id],
        increase_mining_rate: task.increase_mining_rate.toString(),
      };

      await postCompleteTask(user.id, data);
    }
  };

  const handleClickGreat = async () => {
    if (isPostSuccess) {
      setTaskNumber(0);
      getTasks().then(postReset);
    }
  };

  const handleClickBack = () => {
    getUser();

    switchToMenuMain();
  };

  return {
    tasks,
    taskNumber,
    isEmptyList,
    isGetLoading,
    isGetError,
    isGetSuccess,
    isPostSuccess,
    isPostError,
    handleClickPrev,
    handleClickNext,
    handleClickReady,
    handleClickGreat,
    handleClickBack,
  };
};
