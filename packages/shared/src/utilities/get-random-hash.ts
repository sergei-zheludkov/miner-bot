const characters = 'ABCDEFGHJKLMNPQRSTWXYZabcdefghkmnpqrstwxyz123456789';

type GetHash = (length?: number, prefix?: string) => string;

const getRandomHash: GetHash = (length = 10, prefix = '') => {
  if (!length) return '';
  const symbolNumber = Math.floor(Math.random() * characters.length);
  const result = characters.charAt(symbolNumber);
  const hash = `${result}${getRandomHash(length - 1)}`;

  return prefix ? `${prefix}_${hash}` : hash;
};

export { getRandomHash };
