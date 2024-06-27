/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShortUserReadDto } from './ShortUserReadDto';

export type LeadersStatisticReadDto = {
    today: Array<ShortUserReadDto>;
    month: Array<ShortUserReadDto>;
    all_time: Array<ShortUserReadDto>;
};

