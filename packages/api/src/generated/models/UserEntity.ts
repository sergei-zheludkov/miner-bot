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
    gender: UserEntity.gender;
    who_invited_id: string | null;
    referral_counter: number;
    completed_tasks_count: number;
    ban_reason: string | null;
    created: string;
    updated: string;
    deleted: string | null;
};

export namespace UserEntity {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }

    export enum country {
        BY = 'BY',
        KZ = 'KZ',
        RU = 'RU',
        UA = 'UA',
    }

    export enum role {
        ADMIN = 'admin',
        SUPPORT = 'support',
        AFFILIATE = 'affiliate',
        ADVERTISER = 'advertiser',
        USER = 'user',
    }

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        ALL = 'all',
    }


}

