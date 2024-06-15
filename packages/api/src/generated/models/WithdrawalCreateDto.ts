/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WithdrawalCreateDto = {
    user_id: string;
    currency: WithdrawalCreateDto.currency;
    amount: string;
    address: string;
    network?: string;
};

export namespace WithdrawalCreateDto {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

