import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { DayKindEnum, UTILITIES } from '@common_bot/shared';
import { getTimeForReminder } from './helpers';
import type { Reminder } from './types';

type Props = {
  day: DayKindEnum;
  list: Array<Reminder>;
  onChangeReminder: (dayOfWeek: DayKindEnum, reminderId: string, type: 'increase' | 'decrease') => void;
  onChangeStatus: (dayOfWeek: DayKindEnum, reminderId: string) => void;
  onAddReminder: (dayOfWeek: DayKindEnum) => void;
  onRemoveModeClick: () => void;
  onClickBack: () => void;
  // onSaveReminders: () => void;
}

const { empty } = UTILITIES;

const RemindersChangeControl = ({
  day,
  list,
  onChangeReminder,
  onChangeStatus,
  onAddReminder,
  onRemoveModeClick,
  onClickBack,
}: Props) => {
  const { t } = useTranslation('settings');

  const { length } = list;
  const isEmptyList = !length;
  const isFullList = length >= 3;
  const addReminderTitle = isFullList ? `${t('common:max')}3` : t('buttons:add');
  const handleAddReminder = () => (isFullList ? empty : onAddReminder(day));

  const controlButtons = [
    (
      <Button key="add-reminder" onClick={handleAddReminder}>
        {addReminderTitle}
      </Button>
    ),
    !isEmptyList ? (
      <Button key="remove-mode" onClick={onRemoveModeClick}>
        {t('buttons:remove')}
      </Button>
    ) : null,
  ];

  const backButton = [
    (<Button key="back" onClick={onClickBack}>{t('buttons:back')}</Button>),
  ];

  const reminderButtons = list.map(({ id, time, isActive }) => {
    const displayTime = getTimeForReminder(time, isActive);

    const handleChangeStatus = () => onChangeStatus(day, id);
    const clickLess = () => onChangeReminder(day, id, 'decrease');
    const clickMore = () => onChangeReminder(day, id, 'increase');

    return [
      (
        <Button key={`${id}_decrease`} onClick={clickLess}>
          {t('buttons:less')}
        </Button>
      ),
      (
        <Button key={`${id}_time`} onClick={handleChangeStatus}>
          {displayTime}
        </Button>
      ),
      (
        <Button key={`${id}_increase`} onClick={clickMore}>
          {t('buttons:more')}
        </Button>
      ),
    ];
  });

  return (
    <ButtonGroup
      title={t('RemindersChangeControl')}
      isNewMessageEveryRender={false}
      // isResizedKeyboard
    >
      {[
        controlButtons,
        ...reminderButtons,
        backButton,
      ]}
    </ButtonGroup>
  );
};

export { RemindersChangeControl };
