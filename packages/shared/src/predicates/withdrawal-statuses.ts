import { WithdrawalStatusEnum as WithdrawalStatus } from '../enums';

// eslint-disable-next-line max-len
export const isConsideration = (status: WithdrawalStatus | string) => status === WithdrawalStatus.CONSIDERATION;
export const isCanceled = (status: WithdrawalStatus | string) => status === WithdrawalStatus.CANCELED;
export const isRejected = (status: WithdrawalStatus | string) => status === WithdrawalStatus.REJECTED;
export const isConfirmed = (status: WithdrawalStatus | string) => status === WithdrawalStatus.CONFIRMED;
export const isPaid = (status: WithdrawalStatus | string) => status === WithdrawalStatus.PAID;
