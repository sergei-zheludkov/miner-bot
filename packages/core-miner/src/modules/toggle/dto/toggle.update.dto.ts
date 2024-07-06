import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ToggleUpdateDto {
  @ApiProperty({
    required: true,
    example: 'referral_leaders',
  })
  @IsNotEmpty()
  @IsString()
  key: string;

  @ApiProperty({
    required: true,
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  value: boolean;
}
