import { ARRAY } from '../../src';
import { ARRAY_MOCKS } from '../mocks';

const { getLastIndex } = ARRAY;

test('get last index of array', () => {
  expect(getLastIndex(ARRAY_MOCKS.EMPTY)).toBe(-1);
  expect(getLastIndex(ARRAY_MOCKS.STRING)).toBe(4);
  expect(getLastIndex(ARRAY_MOCKS.NUMBER)).toBe(9);
  expect(getLastIndex(ARRAY_MOCKS.OBJECT)).toBe(5);
});
