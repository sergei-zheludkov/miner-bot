import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mining')
export class MiningEntity {
  @ApiProperty({
    example: '266006070',
  })
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: 0.000_000_1,
  })
  @Column({
    type: 'decimal',
    default: 0.000_000_1,
  })
  ton_rate: number;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
    nullable: true,
  })
  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  ton_started: Date;

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
}
