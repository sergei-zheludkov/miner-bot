export const getMinedTokenAmount = (
  miningRate: number,
  miningRateStarted: Date | string | null,
) => {
  const now = new Date().valueOf();
  const miningDate = (miningRateStarted ? new Date(miningRateStarted) : now).valueOf();
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
