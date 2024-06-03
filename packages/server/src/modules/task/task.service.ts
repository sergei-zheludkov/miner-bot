import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  DataSource, FindOptionsWhere, Repository, MoreThan, Or, Equal,
} from 'typeorm';
import { GenderEnum } from '@common_bot/shared';
import { logger } from '../../libs/logger/logger.instance';
import { UserService } from '../user/user.service';
import { CompletedTaskCreateDto, TaskCreateDto, TaskUpdateDto } from './dto';
import { CompletedTaskEntity as CompletedTask } from './completed-task.entity';
import { TaskEntity as Task } from './task.entity';
import { GetQuery } from './types';

const findOne = (tasks_repository: Repository<Task>, id: number) => tasks_repository
  .findOne({
    where: { id },
    // relations: ['who_invited'],
  });

@Injectable()
export class TaskService {
  constructor(
    private readonly userService: UserService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneTask(id: number) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);

      return findOne(tasks_repository, id);
    });
  }

  getTasks({
    limit, offset, country, placement, status, gender,
  }: GetQuery) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);

      const where: FindOptionsWhere<Task> = {
        country,
        placement,
        gender: Or(Equal(gender), Equal(GenderEnum.ALL)),
      };

      if (status === 'active') {
        where.available_limit = MoreThan(0);
      }

      if (status === 'finished') {
        where.available_limit = 0;
      }

      return tasks_repository.find({
        where,
        take: limit,
        skip: offset,
      });
    });
  }

  async createTask(data: TaskCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Task);

        const new_task = tasks_repository.create(data);

        return tasks_repository.save(new_task);
      });
    } catch (error) {
      logger.error('TaskService(createTask):', error);

      throw new Error();
    }
  }

  async updateTask(user_data: TaskUpdateDto) {
    const { id, ...data } = user_data;

    try {
      return await this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Task);

        const task_in_db = await findOne(tasks_repository, id);

        if (!task_in_db) {
          return task_in_db;
        }

        await tasks_repository.update({ id }, data);

        return findOne(tasks_repository, id);
      });
    } catch (error) {
      logger.error('TaskService(updateTask):', error);

      throw new Error();
    }
  }

  completeTasks(tasks: CompletedTaskCreateDto[]) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);
      const completed_tasks_repository = manager.getRepository(CompletedTask);

      Promise.all(
        tasks.map(async ({ task_id }) => {
          await tasks_repository.increment({ id: task_id }, 'complete_count', 1);
          await tasks_repository.decrement({ id: task_id }, 'available_limit', 1);
        }),
      );

      const user_data = {
        id: tasks[0].user_id,
        increase_mining_rate: 0.000_000_1,
        increase_complete_tasks_count: tasks.length,
        mining_rate_started: new Date(),
      };

      await this.userService.updateUser(user_data);

      const completed_tasks_data = tasks
        .map(({ user_id, task_id }) => ({ user: user_id, task: task_id }));

      const completed_tasks = completed_tasks_repository.create(completed_tasks_data);

      return completed_tasks_repository.save(completed_tasks);
    });
  }

  // completeTask({ user_id, task_id }: CompletedTaskCreateDto) {
  //   return this.dataSource.transaction(async (manager) => {
  //     const tasks_repository = manager.getRepository(Task);
  //     const completed_tasks_repository = manager.getRepository(CompletedTask);
  //
  //     const { increase_mining_rate } = await findOne(tasks_repository, task_id);
  //
  //     await tasks_repository.increment({ id: task_id }, 'complete_count', 1);
  //     await tasks_repository.decrement({ id: task_id }, 'available_limit', 1);
  //
  //     const user_data = {
  //       id: user_id,
  //       increase_mining_rate,
  //       increase_complete_tasks_count: 1,
  //     };
  //
  //     await this.userService.updateUser(user_data);
  //
  //     const completed_task = completed_tasks_repository.create({ user: user_id, task: task_id });
  //
  //     return completed_tasks_repository.save(completed_task);
  //   });
  // }
}
