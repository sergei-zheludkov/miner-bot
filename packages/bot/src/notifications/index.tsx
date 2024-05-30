import React from 'react';
import { Notification } from './notification';
import { NewReferral } from './new-referral';
// import { ReferralMoney } from './referral-money';
// import { DailyStatistics } from './daily-statistics';

const Notifications = () => (
  <>
    <Notification />
    <NewReferral />
    {/* <ReferralMoney /> */}
    {/* <DailyStatistics /> */}
  </>
);

export { Notifications };
