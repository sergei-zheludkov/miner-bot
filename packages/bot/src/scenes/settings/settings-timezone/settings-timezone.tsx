import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { DATE } from '@common_bot/shared';
import { useRouter } from '../../../contexts';
import { useSettingsTimezone } from './use-settings-timezone';
import { getTimezoneButtonLines } from './helpers';

const { getTimeZoneFromNumber } = DATE;
const DEFAULT_BUTTONS_ARRAY = [[]];

const SettingsTimezone = () => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation('settings');
  const {
    currentTimezone,
    availableTimezones,
    isChangingMode,
    handleSave,
    turnOnChangingMode,
    turnOffChangingMode,
  } = useSettingsTimezone();

  const timezoneButtons = availableTimezones
    .map((timezone) => (
      <Button key={timezone} onClick={handleSave(timezone)}>
        {getTimeZoneFromNumber(timezone)}
      </Button>
    ))
    .reduce(getTimezoneButtonLines, DEFAULT_BUTTONS_ARRAY);

  const changingModeButton = [(
    <Button key="change-timezone" onClick={turnOnChangingMode}>
      {t('buttons:change')}
    </Button>
  )];

  const backToTimezoneSettingsButton = [(
    <Button key="back-to-timezone-settings" onClick={turnOffChangingMode}>
      {t('buttons:back')}
    </Button>
  )];

  const backToSettingsButton = [(
    <Button key="back-to-settings" onClick={switchToMenuSettings}>
      {t('buttons:back')}
    </Button>
  )];

  const activeTimezone = currentTimezone
    ? `${t('timezone.selected')}${getTimeZoneFromNumber(currentTimezone)}`
    : t('timezone.not_selected');

  const title = isChangingMode
    ? t('timezone.choose')
    : activeTimezone;

  const buttons = isChangingMode
    ? [...timezoneButtons, backToTimezoneSettingsButton]
    : [changingModeButton, backToSettingsButton];

  return (
    <ButtonGroup title={title} isNewMessageEveryRender={false}>
      {buttons}
    </ButtonGroup>
  );
};

export { SettingsTimezone };
