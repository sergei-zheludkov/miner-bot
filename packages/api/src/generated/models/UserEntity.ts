/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MiningEntity } from './MiningEntity';
import type { WalletEntity } from './WalletEntity';

export type UserEntity = {
    id: string;
    firstname: string | null;
    lastname: string | null;
    username: string | null;
    lang: UserEntity.lang;
    country: UserEntity.country;
    role: UserEntity.role;
    gender: UserEntity.gender;
    who_invited: UserEntity | null;
    referral_counter: number;
    completed_tasks_count: number;
    wallet: WalletEntity;
    mining: MiningEntity;
    created: string;
    updated: string;
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

