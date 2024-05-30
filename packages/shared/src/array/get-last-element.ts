import { getLastIndex } from './get-last-index';

const getLastElement = <T>(array: Array<T>): T | null => (array.length
  ? array[getLastIndex(array)]
  : null
);

export { getLastElement };
