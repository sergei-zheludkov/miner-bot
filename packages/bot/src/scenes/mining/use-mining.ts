import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useUser, usePatchUser, useRouter } from '../../contexts';
import { isActiveState, isTransferredState } from './predicates';
import { MINING_STATES } from './constants';
import { getStartedState } from './helpers';

// TODO заменить после создания раздела заданий
const channels = [
  {
    id: '-1002238903830', name: 'Development', url: 'https://t.me/bro_development',
  },
  {
    id: '-1002219211474', name: 'Crypto Sigma', url: 'https://t.me/crypto_sigma_1',
  },
];

export const useMining = () => {
  const { t } = useTranslation('mining');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { switchToMenuMain } = useRouter();
  const { user, getUser } = useUser();
  const { patchUser, isPatchLoading } = usePatchUser();

  const [state, setState] = useState<MINING_STATES>(getStartedState(user));

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickReady = async (message: any) => {
    const checkRequests = await Promise.all(channels
      .map((channel) => bot.client.getChatMember(Number(channel.id), user.id)));

    if (checkRequests.some(({ status }) => status === 'left')) {
      // TODO метод answerCallbackQuery в библиотеку urban-bot
      const options = { text: t('error'), show_alert: true };
      await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);
    } else {
      const data = { id: user.id, mining_rate_started: new Date().toISOString() };

      await patchUser(data);

      setState(MINING_STATES.ACTIVE);
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
    if (isActiveState(state) || isTransferredState(state)) {
      getUser();
    }

    switchToMenuMain();
  };

  return {
    state,
    channels,
    handleClickReady,
    handleClickGet,
    handleClickBack,
  };
};
