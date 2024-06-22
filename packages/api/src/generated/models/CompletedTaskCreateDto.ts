/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompletedTaskCreateDto = {
    user_id: string;
    task_id: number;
    currency: CompletedTaskCreateDto.currency;
    mining_rate?: string;
};

export namespace CompletedTaskCreateDto {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

