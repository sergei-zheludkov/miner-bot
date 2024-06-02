/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskEntity = {
    id: string;
    type: TaskEntity.type;
    country: TaskEntity.country;
    placement: TaskEntity.placement;
    description: string;
    url: string;
    increase_mining_rate: number;
    available_limit: number;
    check_key: string | null;
    complete_count: number;
    contact: string | null;
    created: string;
    updated: string;
    deleted: string;
};

export namespace TaskEntity {

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

