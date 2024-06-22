import { useEffect, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { NOTIFICATION_STATE } from './constants';

// eslint-disable-next-line max-len
// const isNotificationInputState = (state: NOTIFICATION_STATE) => state === NOTIFICATION_STATE.INPUT;
// eslint-disable-next-line max-len
// const isNotificationCheckState = (state: NOTIFICATION_STATE) => state === NOTIFICATION_STATE.CHECK;
const isNotificationSendState = (state: NOTIFICATION_STATE) => state === NOTIFICATION_STATE.SEND;

const DEFAULT_NOTIFICATION_STATE = { geo: '', state: NOTIFICATION_STATE.INPUT };

export const useNotification = () => {
  const { t } = useTranslation('tasks');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const [{ geo, state }, setState] = useState(DEFAULT_NOTIFICATION_STATE);

  // eslint-disable-next-line max-len
  const handleGeo = (countries: string) => setState({ geo: countries, state: NOTIFICATION_STATE.CHECK });
  const handleInput = () => setState((prev) => ({ ...prev, state: NOTIFICATION_STATE.INPUT }));
  const handleSend = () => setState((prev) => ({ ...prev, state: NOTIFICATION_STATE.SEND }));

  useEffect(() => {
    if (isNotificationSendState(state)) {
      const message = `${t('create.notification')} ${geo}`;

      bot.client.sendMessage(-1002171422573, message);
    }
  }, [state]);

  return {
    state,
    handleGeo,
    handleInput,
    handleSend,
  };
};
