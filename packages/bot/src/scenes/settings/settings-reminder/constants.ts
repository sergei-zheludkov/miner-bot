import type { DayKindEnum } from '@common_bot/shared';
import type { RemindersByDays } from './types';
import { getReminder } from './helpers';

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as Array<DayKindEnum>;

const DEFAULT_REMINDERS_BY_DAY = days.reduce<RemindersByDays>(
  (acc, day) => ({ ...acc, [day]: [getReminder(day, 1)] }),
  {} as RemindersByDays,
);

export { days, DEFAULT_REMINDERS_BY_DAY };
