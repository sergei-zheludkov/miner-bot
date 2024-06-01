import { MINING_STATES } from './constants';

// eslint-disable-next-line max-len
export const isRegistrationState = (state: MINING_STATES): boolean => state === MINING_STATES.REGISTRATION;
// eslint-disable-next-line max-len
export const isTransferredState = (state: MINING_STATES): boolean => state === MINING_STATES.TRANSFERRED;
// eslint-disable-next-line max-len
export const isActiveState = (state: MINING_STATES): boolean => state === MINING_STATES.ACTIVE;
