/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeedbackFilesEntity = {
    id: string;
    type: FeedbackFilesEntity.type;
    feedback_id: string;
    created: string;
    updated: string;
};

export namespace FeedbackFilesEntity {

    export enum type {
        FILE = 'file',
        AUDIO = 'audio',
        VOICE = 'voice',
        IMAGE = 'image',
        VIDEO = 'video',
        VIDEO_NOTE = 'video_note',
    }


}

