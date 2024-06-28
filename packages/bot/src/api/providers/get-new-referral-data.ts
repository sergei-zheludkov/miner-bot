import type { NewReferralData } from '../types';

export const getNewReferralData = (data: any): NewReferralData => {
  const { firstname = '', username } = data;

  return { username, firstname };
};
