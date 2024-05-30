interface NotificationData {
  message: string;
}

interface NewReferralData {
  firstname: string;
  lastname: string;
}

// interface ReferralMoneyData extends NewReferralData {
//   bonusMoney: number;
// }
//
// interface PaymentStatistics {
//   [key: string]: {
//     total: number;
//     amount: number;
//   };
// }
//
// interface StatisticsTypes {
//   users: number;
//   payments: PaymentStatistics;
// }

export type {
  NotificationData,
  NewReferralData,
  // ReferralMoneyData,
  // PaymentStatistics,
  // StatisticsTypes,
};
