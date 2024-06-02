import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CountriesEnum, PlacementEnum, TasksEnum } from '@common_bot/shared';

@Entity('tasks')
export class TaskEntity {
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: string;

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
    example: 0.000_000_1,
  })
  @Column({
    type: 'decimal',
    default: 0.000_000_1,
  })
  increase_mining_rate: number;

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
    example: ['tg:266006070', 'email:kykarek@yandex.ru', 'phone:+79238849922'],
    nullable: true,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  contact?: string;

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
