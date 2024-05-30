import { DATE } from '../../src';

const { getTimeFromNumber } = DATE;

describe('get day time from db data number', () => {
  test('correct time cases', () => {
    expect(getTimeFromNumber(300)).toBe('5:00');
    expect(getTimeFromNumber(600)).toBe('10:00');
    expect(getTimeFromNumber(724)).toBe('12:04');
    expect(getTimeFromNumber(1243)).toBe('20:43');
    expect(getTimeFromNumber(1439)).toBe('23:59');
  });

  test('incorrect time cases', () => {
    expect(getTimeFromNumber(12300)).toBe('00:00');
    expect(getTimeFromNumber(6020)).toBe('00:00');
    expect(getTimeFromNumber(7224)).toBe('00:00');
    expect(getTimeFromNumber(13243)).toBe('00:00');
    expect(getTimeFromNumber(91339)).toBe('00:00');
  });

  test('incorrect time cases with default value', () => {
    expect(getTimeFromNumber(12300, '10:00')).toBe('10:00');
    expect(getTimeFromNumber(6020, '12:00')).toBe('12:00');
    expect(getTimeFromNumber(7224, '16:30')).toBe('16:30');
    expect(getTimeFromNumber(13243, 'incorrect time')).toBe('incorrect time');
  });
});
