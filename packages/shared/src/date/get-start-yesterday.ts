import dayjs from 'dayjs';

export const getStartYesterday = () => dayjs().startOf('day').subtract(1, 'day');
