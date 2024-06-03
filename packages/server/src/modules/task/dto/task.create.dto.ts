import {
  IsString,
  IsNumber,
  IsEnum,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  CountriesEnum, GenderEnum, PlacementEnum, TasksEnum,
} from '@common_bot/shared';

export class TaskCreateDto {
  @ApiProperty({
    required: true,
    example: 'Crypto Sigma',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    enum: TasksEnum,
  })
  @IsNotEmpty()
  @IsEnum(TasksEnum)
  type: TasksEnum;

  @ApiProperty({
    required: true,
    enum: CountriesEnum,
  })
  @IsNotEmpty()
  @IsEnum(CountriesEnum)
  country: CountriesEnum;

  @ApiProperty({
    required: true,
    enum: PlacementEnum,
  })
  @IsNotEmpty()
  @IsEnum(PlacementEnum)
  placement: PlacementEnum;

  @ApiProperty({
    required: true,
    enum: GenderEnum,
  })
  @IsNotEmpty()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @ApiProperty({
    required: true,
    example: '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)\n\n2️⃣ Возвращайся сюда, чтобы получить вознаграждение',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    required: true,
    example: 'https://t.me/bro_development',
  })
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    required: false,
    example: 0.000_000_1,
  })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 10 })
  increase_mining_rate?: number;

  @ApiProperty({
    required: true,
    example: 1000,
  })
  @IsNotEmpty()
  @IsNumber()
  available_limit: number;

  @ApiProperty({
    required: false,
    example: '-1002238903830',
  })
  @IsOptional()
  @IsString()
  check_key?: string;

  @ApiProperty({
    required: false,
    example: ['tg:266006070', 'email:kykarek@yandex.ru', 'phone:+79238849922'],
  })
  @IsOptional()
  @IsString()
  contact?: string;
}
