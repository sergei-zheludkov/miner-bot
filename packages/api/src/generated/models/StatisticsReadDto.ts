/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountriesStatisticReadDto } from './CountriesStatisticReadDto';
import type { GendersStatisticReadDto } from './GendersStatisticReadDto';

export type StatisticsReadDto = {
    registered_today: number;
    activated_today: number;
    registered_yesterday: number;
    activated_yesterday: number;
    registered_last_7_days: number;
    activated_last_7_days: number;
    registered_last_30_days: number;
    activated_last_30_days: number;
    registered_this_week: number;
    activated_this_week: number;
    registered_this_month: number;
    activated_this_month: number;
    registered_all_time: number;
    activated_all_time: number;
    countries: CountriesStatisticReadDto;
    genders: GendersStatisticReadDto;
};

