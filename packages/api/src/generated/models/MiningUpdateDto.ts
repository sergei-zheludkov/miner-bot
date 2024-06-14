/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MiningUpdateDto = {
    id: string;
    currency: MiningUpdateDto.currency;
    mining_rate?: string;
    started?: string;
};

export namespace MiningUpdateDto {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

