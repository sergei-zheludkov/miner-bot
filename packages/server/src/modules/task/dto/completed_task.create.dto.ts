import {
  IsString,
  IsNumber,
  IsNotEmpty, IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompletedTaskCreateDto {
  @ApiProperty({
    required: true,
    example: '266006070',
  })
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  task_id: number;

  // @ApiProperty({
  //   required: true,
  //   enum: CountriesEnum,
  // })
  // @IsNotEmpty()
  // @IsEnum(CountriesEnum)
  // country: CountriesEnum;
  //
  // @ApiProperty({
  //   required: true,
  //   enum: PlacementEnum,
  // })
  // @IsNotEmpty()
  // @IsEnum(PlacementEnum)
  // placement: PlacementEnum;
  //
  // @ApiProperty({
  //   required: true,
  //   enum: GenderEnum,
  // })
  // @IsNotEmpty()
  // @IsEnum(GenderEnum)
  // gender: GenderEnum;
}
