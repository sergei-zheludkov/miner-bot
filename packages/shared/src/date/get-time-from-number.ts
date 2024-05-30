const MAX_DAY_TIME = 1440;

const getTimeFromNumber = (time: number, defaultValue = '00:00') => {
  if (time > MAX_DAY_TIME) {
    return defaultValue;
  }

  const absTime = Math.abs(time);
  const hours = String(Math.floor(absTime / 60));
  const minutes = String(absTime % 60).padStart(2, '0');

  return `${hours}:${minutes}`;
};

export { getTimeFromNumber };
