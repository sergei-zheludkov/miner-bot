/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedbackFilesCreateDto } from './FeedbackFilesCreateDto';

export type FeedbackCreateDto = {
    id: string;
    text?: string;
    feedback_files?: Array<FeedbackFilesCreateDto>;
    user_id: string;
    type: FeedbackCreateDto.type;
};

export namespace FeedbackCreateDto {

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


}

