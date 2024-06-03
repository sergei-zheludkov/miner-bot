import { CountriesEnum, GenderEnum, PlacementEnum } from '@common_bot/shared';

export type GetQuery = {
  limit: number;
  offset: number;
  status: 'all' | 'active' | 'finished';
  country: CountriesEnum;
  placement: PlacementEnum;
  gender: GenderEnum;
}

export type Period = {
  start?: Date;
  end?: Date;
};
