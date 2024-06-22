import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import { PlacementEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useMining, useRouter, useUser } from '../../contexts';
import { SUPPORT_ID } from '../../constants';

type BotChatMember = Awaited<ReturnType<UrbanBotTelegram['client']['getChatMember']>>;

export const useActivation = () => {
  const { t } = useTranslation('common');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { switchToSceneError } = useRouter();
  const { user } = useUser();
  const { isPostMiningCalled, postMining } = useMining();
  const { getTasks: getTasksApi } = useApi().task;

  const {
    data: tasks = [],
    isCalled: isGetTasksCalled,
    isLoading: isGetTasksLoading,
    isSuccess: isGetTasksSuccess,
    isError: isGetTasksError,
    // statusCode: getStatusCode,
  } = useQuery('get_tasks', () => getTasksApi(
    user.id,
    user.country,
    PlacementEnum.MINING_ACTIVATION,
    user.gender,
    'active',
    0,
    10,
  ));

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickReady = async (message: any) => {
    if (isPostMiningCalled) {
      return;
    }

    const checkRequests = ((await Promise.all(tasks
      .map(async (task) => {
        try {
          // Проверяем человека на вступление в группу
          const check = await bot.client.getChatMember(Number(task.check_key), user.id);

          return check;
        } catch (error) {
          // Оповещаем админа, если владелец чата не добавил бота в админку
          bot.client.sendMessage(SUPPORT_ID, `Владелец чата  "${task.name}" не добавил бота в Админку`);

          return null;
        }
        // Фильтруем чаты
      }))).filter(Boolean)) as unknown as Array<BotChatMember>;

    if (checkRequests.length !== tasks.length) {
      switchToSceneError();

      return;
    }

    if (checkRequests.some(({ status }) => status === 'left')) {
      // TODO метод answerCallbackQuery в библиотеку urban-bot
      const options = { text: t('conditions_not_met'), show_alert: true };

      await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);

      return;
    }

    await postMining({
      id: user.id,
      who_invited_id: user.who_invited_id,
      tasks: tasks.map((task) => task.id),
    });
  };

  return {
    tasks,
    isGetTasksCalled,
    isGetTasksLoading,
    isGetTasksSuccess,
    isGetTasksError,
    handleClickReady,

  };
};
