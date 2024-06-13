import {
  IsString, IsNotEmpty, IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
    example: 'decrease',
  })
  @IsNotEmpty()
  @IsString()
  operation: 'increase' | 'decrease';

  @ApiProperty({
    required: false,
    example: '0.005',
  })
  @IsOptional()
  @IsString()
  ton?: string | number;
}
