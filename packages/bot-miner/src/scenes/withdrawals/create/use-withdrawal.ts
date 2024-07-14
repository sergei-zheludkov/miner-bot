import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { CurrencyEnum, HOOK } from '@common_bot/shared';
import { useApi, useQuery, WithdrawalCreateDto } from '@common_bot/api';
import { useUser, useWallet } from '../../../contexts';

const { useToggleState } = HOOK;
const MINIMAL = '1';

export const useWithdrawal = () => {
  const { t } = useTranslation('withdrawals');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { user } = useUser();
  const { postWithdrawal: postWithdrawalApi } = useApi().withdrawal;
  const { wallet } = useWallet();

  const {
    data: withdrawal,
    fetch: postWithdrawal,
    isCalled: isPostCalled,
    isSuccess: isPostSuccess,
    isError: isPostError,
  } = useQuery('post_withdrawal', postWithdrawalApi, { isLazy: true });

  // TODO: Использовать предыдущий адрес
  const [address, setAddress] = useState(/* user.wallet.ton_address || */ '');
  const [amount, setAmount] = useState(MINIMAL);
  const { toggle: isConfirmedAmount, turnOn: handleConfirmAmount } = useToggleState();
  const maxAmount = Number(wallet.ton_amount).toFixed(1);

  const handleAddAddress = (str: string) => {
    if (!address) {
      setAddress(str);
    }
  };

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleIncreaseAmount = (message: any) => {
    setAmount((prev) => {
      const newAmount = (Number(prev) + 0.1).toFixed(1);

      if (newAmount > maxAmount) {
        const text = `${t('amount_controller.error_increase')} ${maxAmount}`;

        bot.client.answerCallbackQuery(message.nativeEvent.payload.id, { text, show_alert: true });

        return prev;
      }

      return newAmount;
    });
  };

  // TODO добавить описание параметров коллбека в библиотеке urban-bot
  const handleDecreaseAmount = (message: any) => {
    setAmount((prev) => {
      const newAmount = (Number(prev) - 0.1).toFixed(1);

      if (newAmount < MINIMAL) {
        const text = `${t('amount_controller.error_decrease')} ${MINIMAL}`;

        bot.client.answerCallbackQuery(message.nativeEvent.payload.id, { text, show_alert: true });

        return prev;
      }

      return newAmount;
    });
  };

  const handleMaxAmount = () => setAmount(maxAmount);

  const handleClickConfirm = (curr: CurrencyEnum) => async () => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const currency = curr as unknown as WithdrawalCreateDto['currency'];

    await postWithdrawal({
      user_id: user.id,
      amount,
      currency,
      address,
    });
  };

  return {
    address,
    amount,
    maxAmount,
    withdrawal,
    isConfirmedAmount,
    isPostCalled,
    isPostSuccess,
    isPostError,
    handleAddAddress,
    handleIncreaseAmount,
    handleDecreaseAmount,
    handleClickConfirm,
    handleConfirmAmount,
    handleMaxAmount,
  };
};
