import { ApiProperty } from '@nestjs/swagger';

export class GendersStatisticReadDto {
  @ApiProperty({
    example: 5,
  })
  male: number;

  @ApiProperty({
    example: 5,
  })
  female: number;
}
