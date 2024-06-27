/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountriesStatisticReadDto } from './CountriesStatisticReadDto';
import type { GendersStatisticReadDto } from './GendersStatisticReadDto';

export type StatisticsReadDto = {
    today: number;
    yesterday: number;
    last_7_days: number;
    last_30_days: number;
    this_week: number;
    this_month: number;
    all_time: number;
    countries: CountriesStatisticReadDto;
    genders: GendersStatisticReadDto;
};

