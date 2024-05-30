import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { DayKindEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { getTimeForReminder } from './helpers';
import type { Reminder } from './types';

type Props = {
  day: DayKindEnum;
  list: Array<Reminder>;
  onChangeStatus: (dayOfWeek: DayKindEnum, reminderId: string) => void;
  onChangeSwitcher: (dayOfWeek: DayKindEnum, reminderId: string) => void;
  onConfirmRemove: (dayOfWeek: DayKindEnum) => void;
  onBackClick: () => void;
}

const RemindersRemoveControl = ({
  day,
  list,
  onChangeStatus,
  onChangeSwitcher,
  onConfirmRemove,
  onBackClick,
}: Props) => {
  const { t } = useTranslation('settings');

  const selectedCount = list.reduce((acc, { isSelected }) => (isSelected ? acc + 1 : acc), 0);

  const handleConfirmRemove = () => onConfirmRemove(day);

  const controlButtons = [
    (
      <Button key="add-reminder">
        {`${t('reminder.selected')}${selectedCount}`}
      </Button>
    ),
  ];

  const removeReminders = list.map(({
    id, time, isActive, isSelected,
  }) => {
    const displayTime = getTimeForReminder(time, isActive);
    const handleChangeStatus = () => onChangeStatus(day, id);
    const handleSelected = () => onChangeSwitcher(day, id);

    return [
      (
        <Button key={`${id}_checkbox`} onClick={handleSelected}>
          {isSelected ? '✅' : '☑️'}
        </Button>
      ),
      (
        <Button key={`${id}_time`} onClick={handleChangeStatus}>
          {displayTime}
        </Button>
      ),
    ];
  });

  const removeButton = [
    (
      <Button key="confirm" onClick={handleConfirmRemove}>
        {t('buttons:confirm')}
      </Button>
    ),
  ];

  const backButton = [
    (
      <Button key="back" onClick={onBackClick}>
        {t('buttons:back')}
      </Button>
    ),
  ];

  return (
    <ButtonGroup
      title={t('second')}
      isNewMessageEveryRender={false}
      isResizedKeyboard
    >
      {[
        controlButtons,
        ...removeReminders,
        removeButton,
        backButton,
      ]}
    </ButtonGroup>
  );
};

export { RemindersRemoveControl };
