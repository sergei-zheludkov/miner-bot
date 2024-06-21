/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WalletEntity } from '../models/WalletEntity';

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

}
