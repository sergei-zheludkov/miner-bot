import { UTILITIES } from '../../src';

const { getRandomHash } = UTILITIES;

describe('get random hash', () => {
  test('define length', () => {
    expect(getRandomHash(4)).toHaveLength(4);
    expect(getRandomHash(12)).toHaveLength(12);
  });

  test('define prefix', () => {
    const hash_1 = getRandomHash(5, 'test');
    expect(hash_1).toMatch('test_');
    expect(hash_1).toHaveLength(10);

    const hash_2 = getRandomHash(15, 'hash');
    expect(hash_2).toMatch('hash_');
    expect(hash_2).toHaveLength(20);

    const hash_3 = getRandomHash(30, 'user_id');
    expect(hash_3).toMatch('user_id_');
    expect(hash_3).toHaveLength(38);
  });

  test('default call', () => {
    expect(getRandomHash()).toHaveLength(10);
  });
});
