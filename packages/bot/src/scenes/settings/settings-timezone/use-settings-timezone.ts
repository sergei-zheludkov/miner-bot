import { useEffect } from 'react';
import { CONSTANTS, HOOK } from '@common_bot/shared';
import { useUser } from '../../../contexts';
import { useSettingsPatchUser } from '../use-settings-patch-user';

const { TIMEZONES } = CONSTANTS;
const { useToggleState } = HOOK;

const useSettingsTimezone = () => {
  const { user, getUser } = useUser();
  const { patchUser, isPatchSuccess: isSaved } = useSettingsPatchUser();
  const {
    toggle: isChangingMode,
    turnOn: turnOnChangingMode,
    turnOff: turnOffChangingMode,
  } = useToggleState();

  const { timezone: currentTimezone } = user;
  const availableTimezones = TIMEZONES.filter((timezone) => timezone !== currentTimezone);

  const handleSave = (timezone: number) => async () => {
    await patchUser({ id: user.id, timezone });

    turnOffChangingMode();
  };

  useEffect(() => {
    if (isSaved) {
      // Necessary to send request to event_loop
      setTimeout(getUser, 300);
    }
  }, [isSaved]);

  return {
    currentTimezone,
    availableTimezones,

    isSaved,
    isChangingMode,

    handleSave,
    turnOnChangingMode,
    turnOffChangingMode,
  };
};

export { useSettingsTimezone };
