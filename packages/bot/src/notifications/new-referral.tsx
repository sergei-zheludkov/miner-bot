import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { messageBroker } from '../api';
import { logScene } from '../logs';
import type { NewReferralData } from '../api';

const defaultState: NewReferralData = { username: '' };

export const NewReferral: React.FC = () => {
  const { t } = useTranslation('notification');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ username }, setState] = useState<NewReferralData>(defaultState);

  const callback = (data: NewReferralData) => setState(data);

  useEffect(
    () => messageBroker.newReferral(chat.id, callback),
    [bot.client, chat.id],
  );

  logScene(chat.id, 'notification_new_referral', chat.username, '| DATA:', { username });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (username) {
      timeoutId = setTimeout(() => setState(defaultState), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [username]);

  if (username) {
    return (
      <Text>
        {t('new_referral.title_prefix')}
        {username}
        &#32;
        {t('new_referral.title_postfix')}
        <br />
        <br />
        {t('new_referral.invitation_bonus_prefix')}
        <b>&#32;0.005 TON&#32;</b>
        {t('new_referral.invitation_bonus_postfix')}
      </Text>
    );
  }

  return null;
};
