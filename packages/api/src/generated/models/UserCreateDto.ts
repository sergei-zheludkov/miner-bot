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
    gender: UserCreateDto.gender;
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
        BY = 'BY',
        KZ = 'KZ',
        RU = 'RU',
    }


}

