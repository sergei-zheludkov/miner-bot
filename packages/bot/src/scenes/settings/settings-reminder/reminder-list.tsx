import React from 'react';
import { DayKindEnum } from '@common_bot/shared';
import type { Reminder } from './types';
import { RemindersRemoveControl } from './reminders-remove-control';
import { RemindersChangeControl } from './reminders-change-control';

type Props = {
  day: DayKindEnum;
  list: Array<Reminder>;
  isRemoveMode: boolean;
  onChangeReminder: (dayOfWeek: DayKindEnum, reminderId: string, type: 'increase' | 'decrease') => void;
  onChangeStatus: (dayOfWeek: DayKindEnum, reminderId: string) => void;
  onChangeSwitcher: (dayOfWeek: DayKindEnum, reminderId: string) => void;
  onAddReminder: (dayOfWeek: DayKindEnum) => void;
  onConfirmRemove: (dayOfWeek: DayKindEnum) => void;
  onSwitchRemoveMode: () => void;
  onClickBackToDays: () => void;
}

const ReminderList = ({
  day,
  list,
  isRemoveMode,
  onChangeReminder,
  onChangeStatus,
  onChangeSwitcher,
  onAddReminder,
  onConfirmRemove,
  onSwitchRemoveMode,
  onClickBackToDays,
}: Props) => (isRemoveMode
  ? (
    <RemindersRemoveControl
      day={day}
      list={list}
      onChangeStatus={onChangeStatus}
      onChangeSwitcher={onChangeSwitcher}
      onConfirmRemove={onConfirmRemove}
      onBackClick={onSwitchRemoveMode}
    />
  )
  : (
    <RemindersChangeControl
      day={day}
      list={list}
      onChangeReminder={onChangeReminder}
      onChangeStatus={onChangeStatus}
      onAddReminder={onAddReminder}
      onRemoveModeClick={onSwitchRemoveMode}
      onClickBack={onClickBackToDays}
    />
  ));

export { ReminderList };
