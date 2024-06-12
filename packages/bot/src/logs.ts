import { DATE } from '@common_bot/shared';
import type { Scenes } from './constants';

const { getFormattedDate } = DATE;

const DATE_TEMPLATE = 'DD/MM/YYYY, HH:mm:ss';

export const logScene = (
  chat_id: string,
  scene: Scenes | string,
  chat_username?: string,
) => console.info(
  getFormattedDate(DATE_TEMPLATE),
  `| User ID: ${chat_id}`,
  `| Username: ${chat_username}`,
  `| Scene: ${scene}`,
);
