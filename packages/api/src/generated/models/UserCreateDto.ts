/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreateDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    who_invited_id?: string | null;
    lang: UserCreateDto.lang;
    gender?: UserCreateDto.gender | null;
    country: UserCreateDto.country;
};

export namespace UserCreateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }

    export enum country {
        RU = 'RU',
        US = 'US',
    }


}

