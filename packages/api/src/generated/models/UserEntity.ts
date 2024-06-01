/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserEntity = {
    id: string;
    firstname: string | null;
    lastname: string | null;
    username: string | null;
    lang: UserEntity.lang;
    country: UserEntity.country;
    role: UserEntity.role;
    gender: UserEntity.gender | null;
    who_invited: UserEntity | null;
    referral_counter: number;
    finished_tasks_count: number;
    mining_rate: number;
    withdrawn_tons: number;
    mining_started: string | null;
    created: string;
    updated: string;
};

export namespace UserEntity {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }

    export enum country {
        RU = 'RU',
        US = 'US',
    }

    export enum role {
        ADMIN = 'admin',
        SUPPORT = 'support',
        AFFILIATE = 'affiliate',
        USER = 'user',
    }

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }


}

