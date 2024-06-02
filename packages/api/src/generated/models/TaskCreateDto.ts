/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskCreateDto = {
    name: string;
    type: TaskCreateDto.type;
    country: TaskCreateDto.country;
    placement: TaskCreateDto.placement;
    description: string;
    url: string;
    increase_mining_rate?: number;
    available_limit: number;
    check_key?: string;
    contact?: string;
};

export namespace TaskCreateDto {

    export enum type {
        TG_PUBLIC = 'tg_public',
    }

    export enum country {
        BY = 'BY',
        KZ = 'KZ',
        RU = 'RU',
    }

    export enum placement {
        TASK_LIST = 'task_list',
        MINING_ACTIVATION = 'mining_activation',
    }


}

