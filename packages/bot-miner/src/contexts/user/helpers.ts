export const getStartQueryParams = (queries: string) => queries
  .split(':')
  .reduce<Record<string, string>>((acc, arg) => {
    const [key, value] = arg.split('_');

    acc[key] = value;

    return acc;
  }, {});
