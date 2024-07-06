import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';
import {
  IsString,
  IsNumber,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CompletedTaskCreateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty({
    required: true,
    example: 4,
  })
  @IsNotEmpty()
  @IsNumber()
  task_id: number;

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
  @IsNotEmpty()
  @IsString()
  mining_rate: string;
}
