import React from 'react';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../app';
import { expressApp } from '../express-app';

dotenv.config();

const { TELEGRAM_TOKEN, PORT, NODE_ENV } = process.env;

const isDevelopment = NODE_ENV === 'development';

if (!TELEGRAM_TOKEN) {
  throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}

const urbanBotTelegram = new UrbanBotTelegram({
  token: TELEGRAM_TOKEN,
  isPolling: isDevelopment,
});

render(
  <Root
    bot={urbanBotTelegram}
    expressApp={expressApp}
    port={PORT ? Number(PORT) : undefined}
  >
    <App />
  </Root>,
  () => console.log('telegram bot has started\n', { NODE_ENV, TELEGRAM_TOKEN, PORT }, '\n---------------------'),
);
