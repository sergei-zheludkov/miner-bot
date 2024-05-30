/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedbackCountResponseDto } from '../models/FeedbackCountResponseDto';
import type { FeedbackCreateDto } from '../models/FeedbackCreateDto';
import type { FeedbackEntity } from '../models/FeedbackEntity';
import type { FeedbackUpdateDto } from '../models/FeedbackUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FeedbackService {

    /**
     * Returning information about feedback daily limits by user
     * @param id
     * @returns number Feedback daily limits by user has been calculated.
     * @throws ApiError
     */
    public static getFeedbackDailyLimits(
        id: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feedback_notes/daily_limits/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Returning information about feedback count by feedback status
     * @param start
     * @param end
     * @param status
     * @returns FeedbackCountResponseDto Feedback count by status.
     * @throws ApiError
     */
    public static getFeedbackCount(
        start?: string,
        end?: string,
        status?: string,
    ): CancelablePromise<FeedbackCountResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feedback_notes/count',
            query: {
                'start': start,
                'end': end,
                'status': status,
            },
        });
    }

    /**
     * Returning information about feedback note
     * @param id
     * @returns FeedbackEntity Feedback note has been found.
     * @throws ApiError
     */
    public static getOneFeedbackNote(
        id: string,
    ): CancelablePromise<FeedbackEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feedback_notes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Feedback note not found.`,
            },
        });
    }

    /**
     * Returning information about feedback notes
     * @param order
     * @param status
     * @param userId
     * @param supportId
     * @param size
     * @param offset
     * @param limit
     * @returns FeedbackEntity Feedback notes has been found.
     * @throws ApiError
     */
    public static getFeedbackNotes(
        order?: string,
        status?: string,
        userId?: string,
        supportId?: string,
        size?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<Array<FeedbackEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feedback_notes',
            query: {
                'order': order,
                'status': status,
                'user_id': userId,
                'support_id': supportId,
                'size': size,
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Creating new feedback note in db
     * @param requestBody
     * @returns FeedbackEntity Feedback note has been successfully created.
     * @throws ApiError
     */
    public static postFeedbackNote(
        requestBody: FeedbackCreateDto,
    ): CancelablePromise<FeedbackEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/feedback_notes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updating feedback note data
     * @param requestBody
     * @returns FeedbackEntity Feedback note has been updated.
     * @throws ApiError
     */
    public static patchFeedbackNote(
        requestBody: FeedbackUpdateDto,
    ): CancelablePromise<FeedbackEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/feedback_notes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Feedback note not found.`,
            },
        });
    }

}
