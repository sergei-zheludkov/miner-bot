type GetTimeAsNumber = (date?: Date) => number;

export const getTimeAsNumber: GetTimeAsNumber = (date = new Date()) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 60 + minutes;
};
