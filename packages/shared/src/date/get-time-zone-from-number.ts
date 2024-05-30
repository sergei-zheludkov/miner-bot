import { TIMEZONES } from '../constants';
import { getTimeFromNumber } from './get-time-from-number';

const DEFAULT = '0:00';
const DEFAULT_TIMEZONE = 0;

const getTimeZoneFromNumber = (time: number, defaultValue?: string) => {
  if (!TIMEZONES.includes(time)) {
    return defaultValue || DEFAULT;
  }

  if (time === DEFAULT_TIMEZONE) {
    return DEFAULT;
  }

  const timeToDisplay = getTimeFromNumber(time);

  return time < 0 ? `-${timeToDisplay}` : `+${timeToDisplay}`;
};

export { getTimeZoneFromNumber };
