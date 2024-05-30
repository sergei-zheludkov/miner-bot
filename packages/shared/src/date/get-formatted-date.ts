import dayjs from 'dayjs';

const getFormattedDate = (date: string, template: string) => dayjs(date).format(template);

export { getFormattedDate };
