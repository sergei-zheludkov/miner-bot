import React, { useEffect } from 'react';
import { useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { messageBroker } from '../api';
import { logScene } from '../logs';
import type { NewReferralData } from '../api';

export const NewReferralActivated: React.FC = () => {
  const { t } = useTranslation('notification');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();

  logScene(chat.id, 'notification_new_referral has been activated', chat.username ?? chat.firstName);

  const callback = async ({ referralId, username, firstname }: NewReferralData) => {
    const text = `${t('new_referral.title_prefix')} ${username ? `@${username}` : firstname} ${t('new_referral.title_postfix')}\n\n${t('new_referral.invitation_bonus_prefix')} 0.01 TON ${t('new_referral.invitation_bonus_postfix')}`;

    await bot.client.sendMessage(referralId, text);

    logScene(chat.id, 'notification_new_referral has sent to', 'NOTIFICATION', referralId);
  };

  useEffect(
    () => messageBroker.newReferralActivated(callback),
    [],
  );

  return null;
};
