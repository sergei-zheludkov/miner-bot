import { useState } from 'react';
import { DayKindEnum, HOOK } from '@common_bot/shared';
import { useUser } from '../../../contexts';
import { useSettingsPatchUser } from '../use-settings-patch-user';
import { DEFAULT_REMINDERS_BY_DAY } from './constants';
import { getReminder } from './helpers';
import type { RemindersByDays } from './types';

const { useToggleState } = HOOK;

const useSettingsReminder = () => {
  const { user } = useUser();
  const { patchUser, isPatchSuccess: isSaved } = useSettingsPatchUser();

  const [reminders, setReminders] = useState(DEFAULT_REMINDERS_BY_DAY);
  const [day, setDay] = useState<DayKindEnum | null>(null);
  const {
    toggle: isRemoveMode,
    turnOff: turnOffRemoveMode,
    switchOn: handleSwitchRemoveMode,
  } = useToggleState();

  const handleChangeDay = (dayOfWeek: DayKindEnum) => setDay(dayOfWeek);
  const handleClearDay = () => setDay(null);

  const handleAddReminder = (dayOfWeek: DayKindEnum) => {
    const callback = (prevState: RemindersByDays) => {
      const num = prevState[dayOfWeek].length + 1;
      const updatedDay = [...prevState[dayOfWeek], getReminder(dayOfWeek, num)];

      return { ...prevState, [dayOfWeek]: updatedDay };
    };

    setReminders(callback);
  };

  const handleRemoveReminder = (dayOfWeek: DayKindEnum) => {
    const callback = (prevState: RemindersByDays) => {
      const updatedDay = prevState[dayOfWeek].filter(({ isSelected }) => !isSelected);

      return { ...prevState, [dayOfWeek]: updatedDay };
    };

    setReminders(callback);
    setTimeout(turnOffRemoveMode, 500);
  };

  const handleChangeReminder = (dayOfWeek: DayKindEnum, reminderId: string, type: 'increase' | 'decrease') => {
    const callback = (prevState: RemindersByDays) => {
      const updatedDay = prevState[dayOfWeek].map((reminder) => {
        // TODO убрать let вынесением в отдельную функцию
        let { time } = reminder;
        if (type === 'increase') {
          time = time < 1320 ? time + 30 : time;
        }

        if (type === 'decrease') {
          time = time > 420 ? time - 30 : time;
        }

        return (
          reminder.id === reminderId
            ? { ...reminder, time }
            : reminder
        );
      });

      return { ...prevState, [dayOfWeek]: updatedDay };
    };

    setReminders(callback);
  };

  const handleChangeStatus = (dayOfWeek: DayKindEnum, reminderId: string) => {
    const callback = (prevState: RemindersByDays) => {
      const updatedDay = prevState[dayOfWeek].map((reminder) => (reminder.id === reminderId
        ? { ...reminder, status: !reminder.isActive }
        : reminder));

      return { ...prevState, [dayOfWeek]: updatedDay };
    };

    setReminders(callback);
  };

  const handleChangeSelected = (dayOfWeek: DayKindEnum, reminderId: string) => {
    const callback = (prevState: RemindersByDays) => {
      const updatedDay = prevState[dayOfWeek].map((reminder) => (reminder.id === reminderId
        ? { ...reminder, isSelected: !reminder.isSelected }
        : reminder));

      return { ...prevState, [dayOfWeek]: updatedDay };
    };

    setReminders(callback);
  };

  const handleSave = async () => {
    const { id } = user;

    // Todo заменить на reminders
    await patchUser({ id, reminder_time: 660 });

    // if (!newUser) {
    //   return;
    // }
  };

  return {
    day,
    reminders,

    isRemoveMode,
    isSaved,

    handleChangeDay,
    handleClearDay,
    handleChangeReminder,
    handleChangeStatus,
    handleChangeSelected,
    handleAddReminder,
    handleSwitchRemoveMode,
    handleRemoveReminder,
    handleSave,
  };
};

export { useSettingsReminder };
