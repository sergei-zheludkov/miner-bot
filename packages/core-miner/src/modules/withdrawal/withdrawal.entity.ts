import {
  ManyToOne,
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEnum, WithdrawalStatusEnum } from '@common_bot/shared';
import { UserEntity as User } from '../user/user.entity';

@Entity('withdrawals')
export class WithdrawalEntity {
  @ApiProperty({
    example: 3,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: User,
    nullable: false,
  })
  @ManyToOne(() => User, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: string;

  @ApiProperty({
    example: 'UQD2WTp9z4qlXhYpiuI7WygQR59MC8dVxRCztvUtJrhLtRRE',
    nullable: false,
  })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  address: string;

  @ApiProperty({
    example: 'TRC20',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  network: string;

  @ApiProperty({
    enum: CurrencyEnum,
  })
  @Column({
    type: 'enum',
    enum: CurrencyEnum,
  })
  currency: CurrencyEnum;

  @ApiProperty({
    example: 0.5,
  })
  @Column({
    type: 'decimal',
    default: 0.0,
  })
  amount: number;

  @ApiProperty({
    enum: WithdrawalStatusEnum,
  })
  @Column({
    type: 'enum',
    enum: WithdrawalStatusEnum,
    default: WithdrawalStatusEnum.CONSIDERATION,
  })
  status: WithdrawalStatusEnum;

  @ApiProperty({
    example: 'Вы вышли из части групп, в которые вступали по заданиям. Это подпадает под разряд мошенничества. Выплата частично аннулируется. Вы получаете первое предупреждение',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  comment: string;

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
    nullable: true,
  })
  @DeleteDateColumn()
  deleted: Date;
}
