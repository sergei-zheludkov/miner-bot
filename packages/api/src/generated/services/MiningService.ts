/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MiningEntity } from '../models/MiningEntity';
import type { MiningUpdateDto } from '../models/MiningUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MiningService {

    /**
     * Updating mining data
     * @param requestBody
     * @returns MiningEntity Mining has been updated.
     * @throws ApiError
     */
    public static patchMining(
        requestBody: MiningUpdateDto,
    ): CancelablePromise<MiningEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/mining',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Mining not found.`,
            },
        });
    }

}
