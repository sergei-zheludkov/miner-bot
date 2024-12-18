/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEntity } from './UserEntity';

export type WithdrawalEntity = {
    id: number;
    user: UserEntity;
    address: string;
    network: string | null;
    currency: WithdrawalEntity.currency;
    amount: number;
    status: WithdrawalEntity.status;
    comment: string | null;
    created: string;
    updated: string;
    deleted: string | null;
};

export namespace WithdrawalEntity {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }

    export enum status {
        CONSIDERATION = 'consideration',
        CONFIRMED = 'confirmed',
        REJECTED = 'rejected',
        CANCELED = 'canceled',
        PAID = 'paid',
    }


}

