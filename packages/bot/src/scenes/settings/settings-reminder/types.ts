import { DayKindEnum } from '@common_bot/shared';

type Reminder = {
  id: string;
  time: number;
  isActive: boolean;
  isSelected: boolean;
}

type RemindersByDays = Record<DayKindEnum, Array<Reminder>>;

export type { Reminder, RemindersByDays };
