import { getLastIndex } from './get-last-index';

export const getLastElement = <T>(array: Array<T>): T | null => (array.length
  ? array[getLastIndex(array)]
  : null
);
