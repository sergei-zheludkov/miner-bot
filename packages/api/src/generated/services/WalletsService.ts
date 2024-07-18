/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WalletEntity } from '../models/WalletEntity';
import type { WalletUpdateDto } from '../models/WalletUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WalletsService {

    /**
     * Returning information about wallet
     * @param id
     * @returns WalletEntity Wallet has been found.
     * @throws ApiError
     */
    public static getOneWallet(
        id: string,
    ): CancelablePromise<WalletEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/wallets/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Wallet not found.`,
            },
        });
    }

    /**
     * Updating wallet data
     * @param requestBody
     * @returns WalletEntity Wallet has been updated.
     * @throws ApiError
     */
    public static patchWallet(
        requestBody: WalletUpdateDto,
    ): CancelablePromise<WalletEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/wallets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Wallet not found.`,
            },
        });
    }

}
