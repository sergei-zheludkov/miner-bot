/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeedbackUpdateDto = {
    id: string;
    support_id?: string;
    text?: string;
    status: FeedbackUpdateDto.status;
};

export namespace FeedbackUpdateDto {

    export enum status {
        WAITING = 'waiting',
        PROCESSING = 'processing',
        DONE = 'done',
    }


}

