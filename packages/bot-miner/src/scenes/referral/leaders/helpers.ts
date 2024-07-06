export const getNumber = (n: number) => {
  const ordinal = n + 1;

  switch (ordinal) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    case 4:
    case 5:
      return '🏅';
    default:
      return ` ${ordinal}. `;
  }
};
