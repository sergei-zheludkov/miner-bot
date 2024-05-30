import React from 'react';
import { DayList } from './day-list';
import { ReminderList } from './reminder-list';
import { useSettingsReminder } from './use-settings-reminder';

const SettingsReminder = () => {
  const {
    day,
    reminders,
    isRemoveMode,
    // isSaved: isSuccess,
    handleChangeDay,
    handleClearDay,
    handleChangeSelected,
    handleChangeStatus,
    handleChangeReminder,
    handleRemoveReminder,
    handleAddReminder,
    handleSwitchRemoveMode,
  } = useSettingsReminder();

  if (day) {
    return (
      <ReminderList
        day={day}
        list={reminders[day]}
        isRemoveMode={isRemoveMode}
        onChangeStatus={handleChangeStatus}
        onChangeSwitcher={handleChangeSelected}
        onChangeReminder={handleChangeReminder}
        onAddReminder={handleAddReminder}
        onSwitchRemoveMode={handleSwitchRemoveMode}
        onConfirmRemove={handleRemoveReminder}
        onClickBackToDays={handleClearDay}
      />
    );
  }

  return (
    <DayList reminders={reminders} onChange={handleChangeDay} />
  );
};

export { SettingsReminder };
