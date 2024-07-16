import { ApiProperty } from '@nestjs/swagger';
import { CountriesStatisticReadDto } from './countries-statistic.read.dto';
import { GendersStatisticReadDto } from './genders-statistic.read.dto';

export class StatisticsReadDto {
  @ApiProperty({
    example: 5,
  })
  registered_today: number;

  @ApiProperty({
    example: 5,
  })
  activated_today: number;

  @ApiProperty({
    example: 5,
  })
  registered_yesterday: number;

  @ApiProperty({
    example: 5,
  })
  activated_yesterday: number;

  @ApiProperty({
    example: 5,
  })
  registered_last_7_days: number;

  @ApiProperty({
    example: 5,
  })
  activated_last_7_days: number;

  @ApiProperty({
    example: 5,
  })
  registered_last_30_days: number;

  @ApiProperty({
    example: 5,
  })
  activated_last_30_days: number;

  @ApiProperty({
    example: 5,
  })
  registered_this_week: number;

  @ApiProperty({
    example: 5,
  })
  activated_this_week: number;

  @ApiProperty({
    example: 5,
  })
  registered_this_month: number;

  @ApiProperty({
    example: 5,
  })
  activated_this_month: number;

  @ApiProperty({
    example: 5,
  })
  registered_all_time: number;

  @ApiProperty({
    example: 5,
  })
  activated_all_time: number;

  @ApiProperty({
    example: CountriesStatisticReadDto,
  })
  countries: CountriesStatisticReadDto;

  @ApiProperty({
    example: GendersStatisticReadDto,
  })
  genders: GendersStatisticReadDto;
}
