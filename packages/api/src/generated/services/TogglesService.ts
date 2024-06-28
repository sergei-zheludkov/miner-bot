/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToggleEntity } from '../models/ToggleEntity';
import type { ToggleUpdateDto } from '../models/ToggleUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TogglesService {

    /**
     * Updating toggle data
     * @param requestBody
     * @returns ToggleEntity Toggle has been updated.
     * @throws ApiError
     */
    public static patchToggle(
        requestBody: ToggleUpdateDto,
    ): CancelablePromise<ToggleEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/toggles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Toggle not found.`,
            },
        });
    }

}
