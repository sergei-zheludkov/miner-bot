/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskCreateDto } from '../models/TaskCreateDto';
import type { TaskEntity } from '../models/TaskEntity';
import type { TaskUpdateDto } from '../models/TaskUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TasksService {

    /**
     * Returning information about user
     * @param id
     * @returns TaskEntity User has been found.
     * @throws ApiError
     */
    public static getOneTask(
        id: string,
    ): CancelablePromise<TaskEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found.`,
            },
        });
    }

    /**
     * Returning information about available for user tasks
     * @param country
     * @param placement
     * @param status
     * @param offset
     * @param limit
     * @returns TaskEntity Feedback notes has been found.
     * @throws ApiError
     */
    public static getTasks(
        country?: string,
        placement?: string,
        status?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<Array<TaskEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/tasks',
            query: {
                'country': country,
                'placement': placement,
                'status': status,
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Creating new task in db
     * @param requestBody
     * @returns TaskEntity Task has been successfully created.
     * @throws ApiError
     */
    public static postTask(
        requestBody: TaskCreateDto,
    ): CancelablePromise<TaskEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/tasks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updating task data
     * @param requestBody
     * @returns TaskEntity Task has been updated.
     * @throws ApiError
     */
    public static patchTask(
        requestBody: TaskUpdateDto,
    ): CancelablePromise<TaskEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/tasks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Task not found.`,
            },
        });
    }

}
