import dayjs from 'dayjs';

export const getStartToday = () => dayjs().startOf('day');
