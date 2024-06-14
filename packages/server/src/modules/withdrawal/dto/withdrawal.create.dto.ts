import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
    example: 'TON',
  })
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty({
    required: true,
    example: 0.000_000_1,
  })
  @IsNotEmpty()
  @IsString()
  amount: number;
}
