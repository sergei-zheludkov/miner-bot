import dayjs from 'dayjs';

export const getStartWeek = () => dayjs().locale('ru', { weekStart: 1 }).startOf('week');
