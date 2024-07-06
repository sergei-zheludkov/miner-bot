import {
  IsString, IsNotEmpty, IsDecimal, IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum } from '@common_bot/shared';

export class WalletCreateDto {
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
    example: 0.005,
  })
  @IsNotEmpty()
  @IsDecimal()
  amount: number;
}
