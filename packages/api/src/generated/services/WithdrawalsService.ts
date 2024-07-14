/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WithdrawalCreateDto } from '../models/WithdrawalCreateDto';
import type { WithdrawalEntity } from '../models/WithdrawalEntity';
import type { WithdrawalsReadDto } from '../models/WithdrawalsReadDto';
import type { WithdrawalUpdateDto } from '../models/WithdrawalUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WithdrawalsService {

    /**
     * Returning information about withdrawal
     * @param id
     * @returns WithdrawalEntity Withdrawal has been found.
     * @throws ApiError
     */
    public static getOneWithdrawal(
        id: number,
    ): CancelablePromise<WithdrawalEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/withdrawals/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Withdrawal not found.`,
            },
        });
    }

    /**
     * Returning information about withdrawals
     * @param status
     * @param userId
     * @param sort
     * @param offset
     * @param limit
     * @returns WithdrawalsReadDto Withdrawals has been found.
     * @throws ApiError
     */
    public static getWithdrawals(
        status?: string,
        userId?: string,
        sort?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<WithdrawalsReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/withdrawals',
            query: {
                'status': status,
                'user_id': userId,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Creating new withdrawal in db
     * @param requestBody
     * @returns WithdrawalEntity Withdrawals has been successfully created.
     * @throws ApiError
     */
    public static postWithdrawal(
        requestBody: WithdrawalCreateDto,
    ): CancelablePromise<WithdrawalEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/withdrawals',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updating withdrawal data
     * @param requestBody
     * @returns WithdrawalEntity Withdrawals has been updated.
     * @throws ApiError
     */
    public static updateWithdrawal(
        requestBody: WithdrawalUpdateDto,
    ): CancelablePromise<WithdrawalEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/withdrawals',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Withdrawals not found.`,
            },
        });
    }

}
