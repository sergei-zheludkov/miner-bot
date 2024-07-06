import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity as User } from '../user/user.entity';
import { TaskEntity as Task } from './task.entity';

@Entity('completed_tasks')
export class CompletedTaskEntity {
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ApiProperty({
    type: User,
  })
  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
  })
  user: string;

  @ApiProperty({
    type: Task,
  })
  @ManyToOne(() => Task)
  @JoinColumn({
    name: 'task_id',
  })
  task: number;

  @ApiProperty({
    example: '2022-10-21T19:48:59.726Z',
  })
  @CreateDateColumn()
  created: Date;
}
