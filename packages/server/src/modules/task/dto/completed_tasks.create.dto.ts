import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompletedTasksCreateDto {
  @ApiProperty({
    required: true,
    type: [Number],
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  @IsArray()
  tasks: number[];

  @ApiProperty({
    required: false,
    example: '0.000_000_1',
  })
  @IsOptional()
  @IsString()
  increase_mining_rate?: string;
}
