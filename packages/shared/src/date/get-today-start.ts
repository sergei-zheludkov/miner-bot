import dayjs from 'dayjs';

const getTodayStart = () => dayjs().startOf('day');

export { getTodayStart };
