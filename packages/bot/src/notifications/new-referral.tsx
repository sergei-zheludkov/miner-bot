import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_bot/i18n';
import { messageBroker } from '../api';
import type { NewReferralData } from '../api';

type NewReferralState = NewReferralData & { isShow: boolean };

const defaultState: NewReferralState = {
  isShow: false,
  username: '',
};

export const NewReferral: React.FC = () => {
  const { t } = useTranslation('notification');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{
    isShow,
    username,
  }, setState] = useState<NewReferralState>(defaultState);

  const callback = (data: NewReferralData) => setState({ ...data, isShow: true });

  useEffect(
    () => messageBroker.newReferral(chat.id, callback),
    [bot.client, chat.id],
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) {
      timeoutId = setTimeout(() => setState(defaultState), 500);
    }

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  if (isShow) {
    return (
      <Text>
        {t('new_referral.title')}
        {username}
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
