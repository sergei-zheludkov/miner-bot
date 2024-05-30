import {
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BotLanguageEnum, CountriesEnum } from '@common_bot/shared';

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
    example: 5,
  })
  @IsOptional()
  @IsNumber()
  referral_counter?: number;

  @ApiProperty({
    required: false,
    enum: BotLanguageEnum,
  })
  @IsOptional()
  @IsEnum(BotLanguageEnum)
  lang?: BotLanguageEnum;

  @ApiProperty({
    required: false,
    enum: CountriesEnum,
  })
  @IsOptional()
  @IsEnum(CountriesEnum)
  country?: CountriesEnum;
}
