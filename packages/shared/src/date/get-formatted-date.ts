import dayjs from 'dayjs';

export const getFormattedDate = (template: string, date?: string) => dayjs(date).format(template);
