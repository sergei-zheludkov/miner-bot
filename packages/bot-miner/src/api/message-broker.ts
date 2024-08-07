import { expressApp } from '../express-app';
import { getNewReferralData } from './providers';
import type { NewReferralData } from './types';

export class MessageBroker {
  NOTIFICATION_BASE = '/notifications';

  REFERRALS = {
    NEW: `${this.NOTIFICATION_BASE}/referrals/new`,
  };

  newReferralActivated(callback: (params: NewReferralData) => void) {
    expressApp.post(this.REFERRALS.NEW, (req, res) => {
      const { body } = req;

      const referralData = getNewReferralData(body);

      callback(referralData);

      res.sendStatus(200);
    });
  }
}

export const messageBroker = new MessageBroker();
