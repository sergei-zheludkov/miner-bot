import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../user.entity';

export class UsersAndTogglesReadDto {
  @ApiProperty({
    type: UserEntity,
    required: true,
  })
  user: UserEntity;

  @ApiProperty({
    additionalProperties: { type: 'boolean' },
    required: true,
  })
  toggles: Record<string, boolean>;
}
