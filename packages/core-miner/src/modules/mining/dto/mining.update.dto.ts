import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';

export class MiningUpdateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: true,
    enum: CurrencyEnum,
  })
  @IsNotEmpty()
  @IsEnum(CurrencyEnum)
  currency: CurrencyEnum;

  @ApiProperty({
    required: false,
    example: '0.000_000_1',
  })
  @IsOptional()
  @IsString()
  mining_rate?: string;

  @ApiProperty({
    required: false,
    example: '2022-10-21T19:48:59.726Z',
  })
  @IsOptional()
  @IsDateString()
  started?: Date;
}
