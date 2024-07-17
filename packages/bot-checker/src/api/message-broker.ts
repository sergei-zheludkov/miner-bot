import { expressApp } from '../express-app';
import { getUserAndGroupsData } from './providers';
import type { CheckUserInGroupsCallback } from './types';

export class MessageBroker {
  NOTIFICATION_BASE = '/notifications';

  REFERRALS = {
    NEW: `${this.NOTIFICATION_BASE}/groups/`,
  };

  checkUserInGroups(chatId: string, callback: CheckUserInGroupsCallback) {
    expressApp.post(`${this.REFERRALS.NEW}${chatId}`, (req, res) => {
      const { body } = req;

      const userAndGroupsData = getUserAndGroupsData(body);

      const returnData = callback(userAndGroupsData);

      res.status(200).send(JSON.stringify(returnData));
    });
  }
}

export const messageBroker = new MessageBroker();
