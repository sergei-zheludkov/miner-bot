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
    reminder_time?: number;
    timezone?: number;
};

export namespace UserUpdateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }


}

