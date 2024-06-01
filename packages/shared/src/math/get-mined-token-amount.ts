export const getMinedTokenAmount = (
  miningRate: number,
  miningRateStarted: Date | string,
) => {
  const now = new Date().valueOf();
  const miningDate = new Date(miningRateStarted || '').valueOf();
  const secondsDiff = (now - miningDate) / 1000;
  const ticks = secondsDiff / 5;
  const earned = miningRate * ticks;

  // console.log(
  //   '\nNOW:',
  //   now,
  //   '\nMINING_DATE:',
  //   miningDate,
  //   '\nSECONDS_DIFF:',
  //   secondsDiff,
  //   '\nTICKS:',
  //   ticks,
  //   '\nEARNED:',
  //   earned,
  // );

  return earned.toFixed(10);
};
