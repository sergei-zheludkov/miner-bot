import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
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
}
