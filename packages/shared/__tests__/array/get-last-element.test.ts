import { ARRAY } from '../../src';
import { ARRAY_MOCKS } from '../mocks';

const { getLastElement } = ARRAY;

const OBJECT_EQUAL = { id: 6, name: 'Denis' };

describe('get last element from array', () => {
  test('empty case', () => {
    expect(getLastElement(ARRAY_MOCKS.EMPTY)).toBeNull();
  });

  test('not empty cases', () => {
    expect(getLastElement(ARRAY_MOCKS.STRING)).toBe('five');
    expect(getLastElement(ARRAY_MOCKS.NUMBER)).toBe(10);
    expect(getLastElement(ARRAY_MOCKS.OBJECT)).toEqual(OBJECT_EQUAL);
  });
});
