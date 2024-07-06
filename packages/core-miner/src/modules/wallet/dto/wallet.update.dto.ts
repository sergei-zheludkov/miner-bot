import {
  IsString, IsNotEmpty, IsOptional, IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';

export class WalletUpdateDto {
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
    required: true,
    example: 'decrease',
  })
  @IsOptional()
  @IsString()
  operation?: 'increase' | 'decrease';

  @ApiProperty({
    required: false,
    example: '0.005',
  })
  @IsOptional()
  @IsString()
  amount?: string | number;

  @ApiProperty({
    required: false,
    example: 'UQD2WTp9z4qlXhYpiuI7WygQR59MC8dVxRCztvUtJrhLtRRE',
  })
  @IsOptional()
  @IsString()
  address?: string;
}
