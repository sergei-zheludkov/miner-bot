import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useApi, useQuery } from '@common_bot/api';
import { PlacementEnum } from '@common_bot/shared';
import { useUser, usePatchUser, useRouter } from '../../contexts';
import { usePostCompleteTask } from '../tasks';
import { MINING_STATES } from './constants';
import { getStartedState } from './helpers';

export const useMining = () => {
  const { t } = useTranslation('common');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { switchToMenuMain } = useRouter();
  const { user, getUser } = useUser();
  const { getTasks: getTasksApi } = useApi().task;
  const { patchUser, isPatchLoading } = usePatchUser();
  const { isPostCalled, isPostSuccess, postCompleteTask } = usePostCompleteTask();

  const {
    data: tasks = [],
    isCalled: isGetCalled,
    // isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    // isError: isGetError,
    // statusCode: getStatusCode,
  } = useQuery('get_tasks', () => getTasksApi(
    user.id,
    user.country,
    PlacementEnum.MINING_ACTIVATION,
    user.gender,
    'active',
    0,
    3,
  ));

  // TODO постараться избавиться от стейта и завязаться на статусы ручек
  const [state, setState] = useState<MINING_STATES>(getStartedState(user));

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickReady = async (message: any) => {
    const checkRequests = await Promise.all(tasks
      .map((task) => bot.client.getChatMember(Number(task.check_key), user.id)));

    if (checkRequests.some(({ status }) => status === 'left')) {
      // TODO метод answerCallbackQuery в библиотеку urban-bot
      const options = { text: t('conditions_not_met'), show_alert: true };

      await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);

      return;
    }

    if (!isPostCalled) {
      const data = {
        tasks: tasks.map((task) => task.id),
        // TODO Разобраться почему сервер не принимает decimal
        increase_mining_rate: 0.000_000_1.toString(),
      };

      await postCompleteTask(user.id, data);

      setState(MINING_STATES.REGISTERED);
    }
  };

  const handleClickGet = async () => {
    const data = { id: user.id, mining_rate_started: new Date().toISOString() };

    if (!isPatchLoading) {
      await patchUser(data);
    }

    setState(MINING_STATES.TRANSFERRED);
  };

  const handleClickBack = () => {
    getUser();

    switchToMenuMain();
  };

  return {
    state,
    tasks,
    isGetCalled,
    isGetSuccess,
    isPostSuccess,
    handleClickReady,
    handleClickGet,
    handleClickBack,
  };
};
