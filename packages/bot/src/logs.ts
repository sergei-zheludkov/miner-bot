import { DATE } from '@common_bot/shared';
import type { Scenes } from './constants';

const { getFormattedDate } = DATE;

export const logScene = (
  chat_id: string,
  scene: Scenes | string,
  chat_username?: string,
  ...args: unknown[]
) => console.info(
  getFormattedDate(),
  `| User ID: ${chat_id}`,
  `| Username: ${chat_username}`,
  `| Scene: ${scene}`,
  ...args,
);
