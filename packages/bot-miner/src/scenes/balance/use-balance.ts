import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useWallet } from '../../contexts';

export const useBalance = () => {
  const { t } = useTranslation('balance');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { switchToSceneWithdrawal } = useRouter();
  const { wallet } = useWallet();

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickWithdrawn = async (message: any) => {
    if ((wallet?.ton_amount ?? 0) < 1) {
      const options = { text: t('limit'), show_alert: true };

      await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);
    } else {
      switchToSceneWithdrawal();
    }
  };

  return { handleClickWithdrawn };
};
