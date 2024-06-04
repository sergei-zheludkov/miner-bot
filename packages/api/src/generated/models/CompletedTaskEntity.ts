/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskEntity } from './TaskEntity';
import type { UserEntity } from './UserEntity';

export type CompletedTaskEntity = {
    id: number;
    user: UserEntity;
    task: TaskEntity;
    created: string;
};

