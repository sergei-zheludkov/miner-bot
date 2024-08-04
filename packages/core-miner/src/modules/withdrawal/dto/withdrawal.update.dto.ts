import {
  IsEnum,
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { WithdrawalStatusEnum } from '@common_bot/shared';

export class WithdrawalUpdateDto {
  @ApiProperty({
    required: true,
    example: 3,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true,
    enum: WithdrawalStatusEnum,
  })
  @IsNotEmpty()
  @IsEnum(WithdrawalStatusEnum)
  status: WithdrawalStatusEnum;

  @ApiProperty({
    required: false,
    example: 'Выплата проведена 22.07.2024 в 11:43',
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
