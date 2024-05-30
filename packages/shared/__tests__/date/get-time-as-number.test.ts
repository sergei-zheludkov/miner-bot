import { DATE } from '../../src';
import { DATE_MOCKS } from '../mocks';

const { getTimeAsNumber } = DATE;

test('get day time as number for saving into db', () => {
  expect(getTimeAsNumber(DATE_MOCKS.AUGUST_1990_17)).toBe(1335);
  expect(getTimeAsNumber(DATE_MOCKS.JULY_1992_22)).toBe(630);
  expect(getTimeAsNumber(DATE_MOCKS.OCTOBER_2022_01)).toBe(800);
});
