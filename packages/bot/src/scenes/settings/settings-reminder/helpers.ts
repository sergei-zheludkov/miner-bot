import { DATE } from '@common_bot/shared';
import type { Reminder } from './types';

const { getTimeFromNumber } = DATE;

const getReminder = (day: string, num: number): Reminder => ({
  id: `${day}_${num}`,
  time: 600,
  isActive: true,
  isSelected: false,
});

const getTimeForReminder = (time: number, isActive: boolean) => {
  const icon = isActive ? '⏰' : '🔕';
  const displayTime = isActive ? ` ${getTimeFromNumber(time)}` : '';
  return `${icon}${displayTime}`;
};

export { getReminder, getTimeForReminder };
