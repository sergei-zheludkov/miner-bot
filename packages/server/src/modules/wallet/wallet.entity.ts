import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne, PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity as User } from '../user/user.entity';

@Entity('wallets')
export class WalletEntity {
  @ApiProperty({
    example: '266006070',
  })
  @OneToOne(() => User, (user) => user.id)
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: 0.5,
  })
  @Column({
    type: 'decimal',
    default: 0.0,
  })
  ton_amount: number;

  @ApiProperty({
    example: 'UQD2WTp9z4qlXhYpiuI7WygQR59MC8dVxRCztvUtJrhLtRRE',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  ton_address?: string;

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
