export const getCryptoAmount = (miningRate?: number) => ((miningRate ?? 0) * 1).toFixed(10);
