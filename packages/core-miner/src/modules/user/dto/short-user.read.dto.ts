import { ApiProperty } from '@nestjs/swagger';
import { CountriesEnum, GenderEnum } from '@common_bot/shared';

export class ShortUserReadDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  id: string;

  @ApiProperty({
    required: false,
    example: 'Ivan',
  })
  firstname?: string;

  @ApiProperty({
    required: false,
    example: 'Ivanov',
  })
  lastname?: string;

  @ApiProperty({
    required: true,
    enum: CountriesEnum,
  })
  country: CountriesEnum;

  @ApiProperty({
    required: true,
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @ApiProperty({
    required: true,
    example: '3',
  })
  referral_counter: number;
}
