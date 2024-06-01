import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { useUser } from '../../contexts';

export const useBalance = () => {
  const { t } = useTranslation('balance');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { user } = useUser();

  // const now = new Date().valueOf();
  // const mining_date = new Date(user.mining_rate_started || '').valueOf()
  // const seconds = (now - mining_date) / 1000;

  // console.log(
  //   '\n MINING_STARTED:',
  //   user.mining_rate_started,
  //
  //   '\n NOW:',
  //   now,
  //
  //   '\n MINING_DATE:',
  //   mining_date,
  //
  //   '\n SECONDS:',
  //   seconds,
  // );

  const { balance, withdrawn_tons: withdrawn } = user;

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleClickWithdrawn = async (message: any) => {
    const options = { text: t('limit'), show_alert: true };

    await bot.client.answerCallbackQuery(message.nativeEvent.payload.id, options);
  };

  return { balance, withdrawn, handleClickWithdrawn };
};
