import React, { useMemo } from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { DayKindEnum } from '@common_bot/shared';
import { useRouter } from '../../../contexts';
import { days } from './constants';
import type { RemindersByDays } from './types';

type Props = {
  reminders: RemindersByDays;
  onChange: (day: DayKindEnum) => void;
}

const DayList = ({ reminders, onChange }: Props) => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation(['settings']);
  const handleChange = (day: DayKindEnum) => () => onChange(day);

  const firstMessage = (
    <Text
      isNewMessageEveryRender={false}
      isRemoveKeyboard
    >
      {t('reminder.message')}
    </Text>
  );

  const dayButtons = useMemo(() => days.map((dayOfWeek) => {
    const { length } = reminders[dayOfWeek];
    const title = t(`buttons:${dayOfWeek}`);
    const count = length ? `⏰${length}` : '🔕';

    return (
      <Button key={dayOfWeek} onClick={handleChange(dayOfWeek)}>
        {`${title} ${count}`}
      </Button>
    );
  }), []);

  const confirmButton = [
    // TODO сохранение после готовности бека
    (<Button key="confirm">{t('buttons:confirm')}</Button>),
  ];

  const backButton = [
    (<Button key="back" onClick={switchToMenuSettings}>{t('buttons:back')}</Button>),
  ];

  return (
    <>
      {firstMessage}
      <ButtonGroup
        maxColumns={1}
        title={t('reminder.about')}
        isNewMessageEveryRender={false}
      >
        {[
          ...dayButtons,
          ...confirmButton,
          ...backButton,
        ]}
      </ButtonGroup>
    </>
  );
};

export { DayList };
