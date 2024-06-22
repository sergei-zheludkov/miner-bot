import { IsNotEmpty, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompletedTasksCreateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty({
    required: true,
    type: [Number],
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  @IsArray()
  tasks: number[];
}
