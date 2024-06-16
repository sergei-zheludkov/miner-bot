/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEntity } from './UserEntity';

export type TaskEntity = {
    id: number;
    name: string;
    type: TaskEntity.type;
    country: TaskEntity.country;
    placement: TaskEntity.placement;
    gender: TaskEntity.gender;
    description: string;
    url: string;
    currency: TaskEntity.currency;
    mining_rate: number;
    available_limit: number;
    check_key: string | null;
    complete_count: number;
    contact: UserEntity;
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
        UA = 'UA',
    }

    export enum placement {
        TASK_LIST = 'task_list',
        MINING_ACTIVATION = 'mining_activation',
    }

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        ALL = 'all',
    }

    export enum currency {
        TON = 'ton',
        NOT = 'not',
    }


}

