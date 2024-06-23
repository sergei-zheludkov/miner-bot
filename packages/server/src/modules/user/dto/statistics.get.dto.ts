import { ApiProperty } from '@nestjs/swagger';

export class StatisticsGetDto {
  @ApiProperty({
    example: 5,
  })
  today: number;

  @ApiProperty({
    example: 5,
  })
  yesterday: number;

  @ApiProperty({
    example: 5,
  })
  last_7_days: number;

  @ApiProperty({
    example: 5,
  })
  last_30_days: number;

  @ApiProperty({
    example: 5,
  })
  this_week: number;

  @ApiProperty({
    example: 5,
  })
  this_month: number;

  @ApiProperty({
    example: 5,
  })
  all_time: number;
}
