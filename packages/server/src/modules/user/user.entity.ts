import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  GenderEnum, RoleEnum, BotLanguageEnum, CountriesEnum,
} from '@common_bot/shared';
import { WalletEntity as Wallet } from '../wallet/wallet.entity';
import { MiningEntity as Mining } from '../mining/mining.entity';

@Entity('users')
export class UserEntity {
  @ApiProperty({
    example: '266006070',
  })
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @ApiProperty({
    example: 'Ivan',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  firstname?: string;

  @ApiProperty({
    example: 'Ivanov',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  lastname?: string;

  @ApiProperty({
    example: 'sergei_zheludkov',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    enum: BotLanguageEnum,
  })
  @Column({
    type: 'enum',
    enum: BotLanguageEnum,
    default: BotLanguageEnum.ENGLISH,
  })
  lang: BotLanguageEnum;

  @ApiProperty({
    enum: CountriesEnum,
  })
  @Column({
    type: 'enum',
    enum: CountriesEnum,
  })
  country: CountriesEnum;

  @ApiProperty({
    enum: RoleEnum,
  })
  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: RoleEnum;

  @ApiProperty({
    enum: GenderEnum,
  })
  @Column({
    type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @ApiProperty({
    example: '266006070',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  who_invited_id?: string;

  @ApiProperty({
    example: 5,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  referral_counter: number;

  @ApiProperty({
    example: 5,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  completed_tasks_count: number;

  @ApiProperty({
    example: 'Накрутка приглашений',
    nullable: true,
  })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  ban_reason?: string

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
  deleted: Date
}
