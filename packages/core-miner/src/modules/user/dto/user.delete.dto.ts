import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDeleteDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: true,
    example: 'Накрутка приглашений',
  })
  @IsNotEmpty()
  @IsString()
  ban_reason: string;
}
