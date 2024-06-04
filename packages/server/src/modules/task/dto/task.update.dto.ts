import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TaskUpdateDto {
  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true,
    example: 'Crypto Sigma',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    example: '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)\n\n2️⃣ Возвращайся сюда, чтобы получить вознаграждение',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    required: false,
    example: 1000,
  })
  @IsOptional()
  @IsNumber()
  available_limit?: number;

  @ApiProperty({
    required: false,
    example: ['tg:266006070', 'email:kykarek@yandex.ru', 'phone:+79238849922'],
  })
  @IsOptional()
  @IsString()
  contact?: string;
}
