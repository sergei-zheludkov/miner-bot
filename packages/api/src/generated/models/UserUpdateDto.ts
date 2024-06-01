/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserUpdateDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    lang?: UserUpdateDto.lang;
    increase_mining_rate?: number;
    mining_rate_started?: string;
};

export namespace UserUpdateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }


}

