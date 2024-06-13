import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
    example: 0.005,
  })
  @IsNotEmpty()
  @IsDecimal()
  ton: number;
}
