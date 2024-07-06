import {
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BotLanguageEnum } from '@common_bot/shared';

export class UserUpdateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    required: false,
    example: 'Ivan',
  })
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiProperty({
    required: false,
    example: 'Ivanov',
  })
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiProperty({
    required: false,
    example: 'sergei_zheludkov',
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({
    required: false,
    enum: BotLanguageEnum,
  })
  @IsOptional()
  @IsEnum(BotLanguageEnum)
  lang?: BotLanguageEnum;

  @ApiProperty({
    required: false,
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  increase_completed_tasks_count?: number;
}
