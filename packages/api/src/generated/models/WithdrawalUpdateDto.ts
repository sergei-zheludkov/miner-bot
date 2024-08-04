/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WithdrawalUpdateDto = {
    id: number;
    status: WithdrawalUpdateDto.status;
    comment?: string;
};

export namespace WithdrawalUpdateDto {

    export enum status {
        CONSIDERATION = 'consideration',
        CONFIRMED = 'confirmed',
        REJECTED = 'rejected',
        CANCELED = 'canceled',
        PAID = 'paid',
    }


}

