import { CountriesEnum, PlacementEnum } from '@common_bot/shared';

export type GetQuery = {
  limit: number;
  offset: number;
  status: 'all' | 'active' | 'finished';
  country: CountriesEnum;
  placement: PlacementEnum;
}

export type Period = {
  start?: Date;
  end?: Date;
};
