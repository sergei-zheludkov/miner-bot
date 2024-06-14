import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  CountriesEnum, GenderEnum, PlacementEnum, TasksEnum, CurrencyEnum,
} from '@common_bot/shared';
import { UserEntity as User } from '../user/user.entity';

@Entity('tasks')
export class TaskEntity {
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ApiProperty({
    example: 'Crypto Sigma',
  })
  @Column({
    type: 'varchar',
  })
  name: string;

  @ApiProperty({
    enum: TasksEnum,
  })
  @Column({
    type: 'enum',
    enum: TasksEnum,
  })
  type: TasksEnum;

  @ApiProperty({
    enum: CountriesEnum,
  })
  @Column({
    type: 'enum',
    enum: CountriesEnum,
  })
  country: CountriesEnum;

  @ApiProperty({
    enum: PlacementEnum,
  })
  @Column({
    type: 'enum',
    enum: PlacementEnum,
  })
  placement: PlacementEnum;

  @ApiProperty({
    enum: GenderEnum,
  })
  @Column({
    type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @ApiProperty({
    example: '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)\n\n2️⃣ Возвращайся сюда, чтобы получить вознаграждение',
  })
  @Column({
    type: 'text',
  })
  description: string;

  @ApiProperty({
    example: 'https://t.me/bro_development',
  })
  @Column({
    type: 'varchar',
  })
  url: string;

  @ApiProperty({
    enum: CurrencyEnum,
  })
  @Column({
    type: 'enum',
    enum: CurrencyEnum,
  })
  currency: CurrencyEnum;

  @ApiProperty({
    example: 0.000_000_1,
  })
  @Column({
    type: 'decimal',
    default: 0.000_000_1,
  })
  mining_rate: number;

  @ApiProperty({
    example: 5,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  available_limit: number;

  @ApiProperty({
    example: '-1002238903830',
    nullable: true,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  check_key?: string;

  @ApiProperty({
    example: 5,
  })
  @Column({
    type: 'int',
    default: 0,
  })
  complete_count: number;

  @ApiProperty({
    type: User,
    nullable: false,
  })
  @ManyToOne(() => User, {
    nullable: false,
  })
  @JoinColumn({
    name: 'contact_id',
  })
  contact: string;

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
