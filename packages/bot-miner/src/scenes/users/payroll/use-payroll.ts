import { useEffect, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { CurrencyEnum } from '@common_bot/shared';
import type { UrbanBotTelegram } from '@urban-bot/telegram';
import type { WalletUpdateDto } from '@common_bot/api';
import { useUsers } from '../context';

// Такой финт из-за кривой генерации enum в @common_bot/api
const currency = CurrencyEnum.TON as unknown as WalletUpdateDto['currency'];
const operation = 'increase';

export const usePayroll = () => {
  const { t } = useTranslation('users');
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { patchWallet: patchWalletApi } = useApi().wallet;
  const { user } = useUsers();

  const [amount, setAmount] = useState('');

  const {
    data: wallet,
    isCalled: isPatchWalletCalled,
    isLoading: isPatchWalletLoading,
    isSuccess: isPatchWalletSuccess,
    isError: isPatchWalletError,
    statusCode: patchWalletStatusCode,
    fetch: patchWallet,
  } = useQuery(
    'get_one_user_in_user_control',
    patchWalletApi,
    { isLazy: true },
  );

  useEffect(() => {
    if (amount) {
      (async () => {
        const { data } = await patchWallet({
          id: user.id,
          operation,
          currency,
          amount,
        });

        if (data) {
          bot.client.sendMessage(user.id, `${t('payroll.notification')} ${amount} TON 🎁`);
        }
      })();
    }
  }, [amount]);

  return {
    amount,
    wallet,
    isPatchWalletCalled,
    isPatchWalletLoading,
    isPatchWalletSuccess,
    isPatchWalletError,
    patchWalletStatusCode,
    handleConfirmAmount: setAmount,
  };
};
