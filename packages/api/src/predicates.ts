export const isNotFoundError = (statusCode?: string | number): boolean => !!statusCode
  && Number(statusCode) === 404;
