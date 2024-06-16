import {
  IsString, IsNotEmpty, IsArray, IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';

export class CompletedTasksCreateDto {
  @ApiProperty({
    required: true,
    type: [Number],
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  @IsArray()
  tasks: number[];

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
