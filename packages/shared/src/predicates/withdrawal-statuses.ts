import { WithdrawalStatusEnum as WithdrawalStatus } from '../enums';

// eslint-disable-next-line max-len
export const isConsideration = (status: WithdrawalStatus) => status === WithdrawalStatus.CONSIDERATION;
export const isConfirmed = (status: WithdrawalStatus) => status === WithdrawalStatus.CONFIRMED;
export const isRejected = (status: WithdrawalStatus) => status === WithdrawalStatus.REJECTED;
export const isPaid = (status: WithdrawalStatus) => status === WithdrawalStatus.PAID;
