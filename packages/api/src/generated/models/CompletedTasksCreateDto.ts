/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompletedTasksCreateDto = {
    tasks: Array<number>;
    currency: CompletedTasksCreateDto.currency;
    mining_rate?: string;
};

export namespace CompletedTasksCreateDto {

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

