import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useUser } from '../../contexts';

export const useBalance = () => {
  const { t } = useTranslation('balance');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { user } = useUser();

  const { balance, withdrawn_tons: withdrawn } = user;

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickWithdrawn = async (message: any) => {
    const options = { text: t('limit'), show_alert: true };

    await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);
  };

  return { balance, withdrawn, handleClickWithdrawn };
};
