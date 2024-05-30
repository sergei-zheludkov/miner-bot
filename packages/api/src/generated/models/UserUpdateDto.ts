/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserUpdateDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    referral_counter?: number;
    lang?: UserUpdateDto.lang;
    country?: UserUpdateDto.country;
};

export namespace UserUpdateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }

    export enum country {
        RU = 'RU',
        US = 'US',
    }


}

