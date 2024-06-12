import dayjs from 'dayjs';

export const getTodayStart = () => dayjs().startOf('day');
