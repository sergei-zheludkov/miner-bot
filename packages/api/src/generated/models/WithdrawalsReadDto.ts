/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WithdrawalEntity } from './WithdrawalEntity';

export type WithdrawalsReadDto = {
    withdrawals: Array<WithdrawalEntity>;
    remain_count: number;
};

