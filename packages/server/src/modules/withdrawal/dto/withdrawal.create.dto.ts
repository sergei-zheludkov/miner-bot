import {
  IsString, IsNotEmpty, IsEnum, IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';

export class WithdrawalCreateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty({
    required: true,
    enum: CurrencyEnum,
  })
  @IsNotEmpty()
  @IsEnum(CurrencyEnum)
  currency: CurrencyEnum;

  @ApiProperty({
    required: true,
    example: '1.1',
  })
  @IsNotEmpty()
  @IsString()
  amount: string;

  @ApiProperty({
    required: true,
    example: 'UQD2WTp9z4qlXhYpiuI7WygQR59MC8dVxRCztvUtJrhLtRRE',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    required: false,
    example: 'TRC20',
  })
  @IsOptional()
  @IsString()
  network?: string;
}
