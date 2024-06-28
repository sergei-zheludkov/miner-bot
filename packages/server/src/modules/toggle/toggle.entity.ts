import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('toggles')
export class ToggleEntity {
  @ApiProperty({
    example: 'referral_leaders',
  })
  @PrimaryColumn({
    type: 'varchar',
  })
  key: string;

  @ApiProperty({
    example: true,
  })
  @Column({
    type: 'boolean',
  })
  value: boolean;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @CreateDateColumn()
  created: Date;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @UpdateDateColumn()
  updated: Date;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @DeleteDateColumn()
  deleted: Date;
}
