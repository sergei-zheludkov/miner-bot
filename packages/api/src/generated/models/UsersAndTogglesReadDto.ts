/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEntity } from './UserEntity';

export type UsersAndTogglesReadDto = {
    user: UserEntity;
    toggles: Record<string, boolean>;
};

