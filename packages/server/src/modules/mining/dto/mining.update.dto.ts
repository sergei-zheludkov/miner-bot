import {
  IsString, IsNotEmpty, IsOptional, IsDecimal, IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MiningUpdateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: false,
    example: '2022-10-21T19:48:59.726Z',
  })
  @IsOptional()
  @IsDateString()
  ton_started?: Date;

  @ApiProperty({
    required: false,
    example: '0.000_000_1',
  })
  @IsOptional()
  @IsString()
  increase_ton_rate?: string;
}
