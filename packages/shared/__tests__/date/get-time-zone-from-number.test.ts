import { DATE } from '../../src';

const { getTimeZoneFromNumber } = DATE;

describe('get day time from db data number', () => {
  test('correct timezone cases', () => {
    expect(getTimeZoneFromNumber(0)).toBe('0:00');

    expect(getTimeZoneFromNumber(180)).toBe('+3:00');
    expect(getTimeZoneFromNumber(210)).toBe('+3:30');
    expect(getTimeZoneFromNumber(420)).toBe('+7:00');

    expect(getTimeZoneFromNumber(-60)).toBe('-1:00');
    expect(getTimeZoneFromNumber(-120)).toBe('-2:00');
    expect(getTimeZoneFromNumber(-360)).toBe('-6:00');
  });

  test('incorrect timezone cases', () => {
    expect(getTimeZoneFromNumber(182)).toBe('0:00');
    expect(getTimeZoneFromNumber(900)).toBe('0:00');
    expect(getTimeZoneFromNumber(-125)).toBe('0:00');
    expect(getTimeZoneFromNumber(-800)).toBe('0:00');
  });

  test('incorrect timezone cases with default value', () => {
    expect(getTimeZoneFromNumber(182, '+3:00')).toBe('+3:00');
    expect(getTimeZoneFromNumber(-125, '-2:00')).toBe('-2:00');
    expect(getTimeZoneFromNumber(900, 'incorrect timezone')).toBe('incorrect timezone');
    expect(getTimeZoneFromNumber(-800, 'incorrect tz')).toBe('incorrect tz');
  });
});
