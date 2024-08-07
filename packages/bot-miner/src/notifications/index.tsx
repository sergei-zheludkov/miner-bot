import React from 'react';
import { useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { CONSTANTS } from '@common_bot/shared/';
import { NewReferralActivated } from './new-referral-activated';

const { ADMIN_IDS } = CONSTANTS;

export const Notifications = () => {
  const { chat } = useBotContext<UrbanBotTelegram>();

  if (chat.id === ADMIN_IDS[0]) {
    return <NewReferralActivated />;
  }

  return null;
};
