import { ApiProperty } from '@nestjs/swagger';
import { ShortUserReadDto } from './short-user.read.dto';

export class LeadersStatisticReadDto {
  @ApiProperty({
    type: [ShortUserReadDto],
    required: true,
  })
  today: Array<ShortUserReadDto>;

  @ApiProperty({
    type: [ShortUserReadDto],
    required: true,
  })
  month: Array<ShortUserReadDto>;

  @ApiProperty({
    type: [ShortUserReadDto],
    required: true,
  })
  all_time: Array<ShortUserReadDto>;
}
