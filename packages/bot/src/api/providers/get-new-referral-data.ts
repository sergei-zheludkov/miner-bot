import type { NewReferralData } from '../types';

export const getNewReferralData = (data: any): NewReferralData => {
  const username = data?.username || '';

  return { username };
};
