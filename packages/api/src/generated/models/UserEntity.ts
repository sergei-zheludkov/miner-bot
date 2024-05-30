/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserEntity = {
    id: string;
    firstname: string | null;
    lastname: string | null;
    username: string | null;
    who_invited: UserEntity | null;
    referral_counter: number;
    lang: UserEntity.lang;
    role: UserEntity.role;
    gender: UserEntity.gender | null;
    timezone: number | null;
    reminder_time: number;
    created: string;
    updated: string;
};

export namespace UserEntity {

    export enum lang {
        RU = 'ru',
        EN = 'en',
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

