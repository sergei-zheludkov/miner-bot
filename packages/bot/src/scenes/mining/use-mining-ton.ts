import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useApi, useQuery, CompletedTasksCreateDto } from '@common_bot/api';
import { PlacementEnum, CurrencyEnum } from '@common_bot/shared';
import { useUser } from '../../contexts';
import { usePostCompleteTask } from '../tasks';
import { MINING_STATES } from './constants';
import { getStartedState } from './helpers';

// Такой финт из-за кривой генерации enum в @common_bot/api
const currency = CurrencyEnum.TON as unknown as CompletedTasksCreateDto['currency'];

export const useMiningTon = () => {
  const { t } = useTranslation('common');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { user } = useUser();
  const { getTasks: getTasksApi } = useApi().task;
  const { patchMining: patchMiningApi } = useApi().mining;
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

  const {
    // data: mining ,
    // isCalled: isPatchCalled,
    isLoading: isPatchLoading,
    // isSuccess: isPatchSuccess,
    // isError: isGetError,
    // statusCode: getStatusCode,
    fetch: patchMining,
  } = useQuery('get_tasks', patchMiningApi, { isLazy: true });

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
      await postCompleteTask(user.id, {
        tasks: tasks.map((task) => task.id),
        mining_rate: 0.000_000_1.toFixed(10),
        currency,
      });

      setState(MINING_STATES.REGISTERED);
    }
  };

  const handleClickGet = async () => {
    if (!isPatchLoading) {
      await patchMining({
        id: user.id,
        started: new Date().toISOString(),
        currency,
      });
    }

    setState(MINING_STATES.TRANSFERRED);
  };

  return {
    state,
    tasks,
    isGetCalled,
    isGetSuccess,
    isPostSuccess,
    handleClickReady,
    handleClickGet,
  };
};
