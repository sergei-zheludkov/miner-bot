/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeadersStatisticReadDto } from '../models/LeadersStatisticReadDto';
import type { StatisticsReadDto } from '../models/StatisticsReadDto';
import type { UserCreateDto } from '../models/UserCreateDto';
import type { UserEntity } from '../models/UserEntity';
import type { UsersAndTogglesReadDto } from '../models/UsersAndTogglesReadDto';
import type { UserUpdateDto } from '../models/UserUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Returning information about referral leaders
     * @returns LeadersStatisticReadDto Referral leaders statistics has been found.
     * @throws ApiError
     */
    public static getReferralLeaders(): CancelablePromise<LeadersStatisticReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/leaders',
            errors: {
                404: `Referral leaders statistics has not found.`,
            },
        });
    }

    /**
     * Returning information about users statistics
     * @returns StatisticsReadDto User statistics has been found.
     * @throws ApiError
     */
    public static getUsersStatistics(): CancelablePromise<StatisticsReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/statistics',
        });
    }

    /**
     * Returning information about user and toggles
     * @param id
     * @returns UsersAndTogglesReadDto User and toggles has been found.
     * @throws ApiError
     */
    public static getOneUserAndToggles(
        id: string,
    ): CancelablePromise<UsersAndTogglesReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/toggles/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found.`,
            },
        });
    }

    /**
     * Returning information about user
     * @param id
     * @param select
     * @returns UserEntity User has been found.
     * @throws ApiError
     */
    public static getOneUser(
        id: string,
        select?: string,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            query: {
                'select': select,
            },
            errors: {
                404: `User not found.`,
            },
        });
    }

    /**
     * Creating new user in db
     * @param requestBody
     * @returns UserEntity User has been successfully created.
     * @throws ApiError
     */
    public static postUser(
        requestBody: UserCreateDto,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updating user data
     * @param requestBody
     * @returns UserEntity User has been updated.
     * @throws ApiError
     */
    public static patchUser(
        requestBody: UserUpdateDto,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found.`,
            },
        });
    }

}
