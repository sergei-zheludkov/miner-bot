import { ApiProperty } from '@nestjs/swagger';
import { CountriesEnum } from '@common_bot/shared';

export class CountriesStatisticReadDto {
  @ApiProperty({
    example: 5,
  })
  [CountriesEnum.RUSSIA]: number;

  @ApiProperty({
    example: 5,
  })
  [CountriesEnum.UKRAINE]: number;

  @ApiProperty({
    example: 5,
  })
  [CountriesEnum.KAZAKHSTAN]: number;

  @ApiProperty({
    example: 5,
  })
  [CountriesEnum.BELARUS]: number;
}
