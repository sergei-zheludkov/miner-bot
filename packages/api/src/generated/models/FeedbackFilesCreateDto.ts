/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeedbackFilesCreateDto = {
    id: string;
    type: FeedbackFilesCreateDto.type;
};

export namespace FeedbackFilesCreateDto {

    export enum type {
        FILE = 'file',
        AUDIO = 'audio',
        VOICE = 'voice',
        IMAGE = 'image',
        VIDEO = 'video',
        VIDEO_NOTE = 'video_note',
    }


}

