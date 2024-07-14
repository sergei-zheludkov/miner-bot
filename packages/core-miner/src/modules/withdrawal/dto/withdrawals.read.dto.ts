import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { WithdrawalEntity } from '../withdrawal.entity';

export class WithdrawalsReadDto {
  @ApiProperty({
    type: [WithdrawalEntity],
    required: true,
  })
  withdrawals: Array<WithdrawalEntity>;

  @ApiProperty({
    required: true,
    example: 3,
  })
  @IsNotEmpty()
  @IsNumber()
  remain_count: number;
}
