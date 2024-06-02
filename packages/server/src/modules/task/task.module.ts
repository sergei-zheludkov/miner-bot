import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskEntity as User } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
