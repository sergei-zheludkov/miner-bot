import dayjs from 'dayjs';

const DATE_TEMPLATE = 'DD/MM/YYYY, HH:mm:ss';

// eslint-disable-next-line max-len
export const getFormattedDate = (date?: string, template = DATE_TEMPLATE) => dayjs(date).format(template);
