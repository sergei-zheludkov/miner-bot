import type { NewReferralData } from '../types';

export const getNewReferralData = (data: any): NewReferralData => {
  const { referral_id = '', firstname = '', username } = data;

  return { referralId: referral_id, username, firstname };
};
