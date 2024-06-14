import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { WithdrawalStatusEnum } from '@common_bot/shared';
import { UserEntity as User } from '../user/user.entity';
import { WalletEntity as Wallet } from '../wallet/wallet.entity';

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
    type: Wallet,
    nullable: false,
  })
  @OneToOne(() => Wallet, {
    nullable: false,
  })
  @JoinColumn({
    name: 'wallet_id',
  })
  wallet: string;

  @ApiProperty({
    example: 'TON',
    nullable: false,
  })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  currency: string;

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
