import { useEffect, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';

export const useInvitation = () => {
  const { bot } = useBotContext<UrbanBotTelegram>();
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      try {
        // TODO получение id, username в библиотеке urban-bot
        const { username = '' } = await bot.client.getMe();

        setName(username);
      } catch (error) {
        setName('ERROR');
      }
    })();
  }, []);

  return { name };
};
