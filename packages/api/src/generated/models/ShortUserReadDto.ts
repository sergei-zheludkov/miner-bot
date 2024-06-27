/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShortUserReadDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    country: ShortUserReadDto.country;
    gender: ShortUserReadDto.gender;
    referral_counter: number;
};

export namespace ShortUserReadDto {

    export enum country {
        BY = 'BY',
        KZ = 'KZ',
        RU = 'RU',
        UA = 'UA',
    }

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
        ALL = 'all',
    }


}

