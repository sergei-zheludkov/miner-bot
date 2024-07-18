/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WalletUpdateDto = {
    id: string;
    currency: WalletUpdateDto.currency;
    operation?: string;
    amount?: string;
    address?: string;
};

export namespace WalletUpdateDto {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

