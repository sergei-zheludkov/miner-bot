/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedbackFilesEntity } from './FeedbackFilesEntity';
import type { UserEntity } from './UserEntity';

export type FeedbackEntity = {
    id: string;
    text: string | null;
    feedback_files: Array<FeedbackFilesEntity>;
    user: UserEntity;
    support: UserEntity | null;
    comment: string | null;
    type: FeedbackEntity.type;
    status: FeedbackEntity.status;
    created: string;
    updated: string;
};

export namespace FeedbackEntity {

    export enum type {
        TEXT = 'text',
        STICKER = 'sticker',
        VOICE = 'voice',
        VIDEO_NOTE = 'video_note',
        IMAGE = 'image',
        VIDEO = 'video',
        AUDIO = 'audio',
        FILE = 'file',
        MEDIA_GROUP = 'media_group',
    }

    export enum status {
        WAITING = 'waiting',
        PROCESSING = 'processing',
        DONE = 'done',
    }


}

