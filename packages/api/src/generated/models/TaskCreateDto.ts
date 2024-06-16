/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskCreateDto = {
    name: string;
    type: TaskCreateDto.type;
    country: TaskCreateDto.country;
    placement: TaskCreateDto.placement;
    gender: TaskCreateDto.gender;
    description: string;
    url: string;
    currency: TaskCreateDto.currency;
    mining_rate: string;
    available_limit: number;
    contact_id: string;
    check_key?: string;
};

export namespace TaskCreateDto {

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

