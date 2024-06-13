import { /* useEffect, */ useState } from 'react';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { /* HOOK, */ PlacementEnum } from '@common_bot/shared';
import { /* TaskEntity, */ useApi, useQuery } from '@common_bot/api';
import { useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../../contexts';
import { usePostCompleteTask } from '../use-post-complete-task';

// const { useToggleState } = HOOK;

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
    isCalled: isGetCalled,
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

  // const { toggle: isChecked, turnOn: setChecked } = useToggleState();

  const [taskNumber, setTaskNumber] = useState(0);

  const isEmptyList = !tasks.length;

  // const checkTasksForCompletion = async (tasksForCheck: TaskEntity[]) => {
  //   if (!tasks.length) {
  //     setChecked();
  //     return;
  //   }
  //
  //   const checkedTasksForCompletion = tasksForCheck.map(async (task) => {
  //     const channel_id = Number(task.check_key);
  //     const checkRequests = await bot.client.getChatMember(channel_id, user.id);
  //     return checkRequests.status !== 'left' ? task.id : NaN;
  //   });
  //
  //   const completedTaskIds = (await Promise.all(checkedTasksForCompletion)).filter(Boolean);
  //
  //   if (completedTaskIds.length) {
  //     await postCompleteTask(user.id, { tasks: completedTaskIds });
  //     await getTasks().then(postReset);
  //   }
  //
  //   setChecked();
  // };

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

  // useEffect(() => {
  //   checkTasksForCompletion(tasks);
  // }, [tasks.length]);

  return {
    tasks,
    taskNumber,
    isEmptyList,
    // isChecked,
    isGetCalled,
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
