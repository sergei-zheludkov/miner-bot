import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  MoreThan, DataSource, Repository, FindOptionsWhere,
} from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { TaskEntity as Task } from './task.entity';
import { TaskCreateDto, TaskUpdateDto } from './dto';
import { GetQuery } from './types';

const findOne = (tasks_repository: Repository<Task>, id: string) => tasks_repository
  .findOne({
    where: { id },
    // relations: ['who_invited'],
  });

@Injectable()
export class TaskService {
  constructor(
    // private readonly httpService: HttpService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getOneTask(id: string) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);

      return findOne(tasks_repository, id);
    });
  }

  getTasks({
    limit, offset, country, placement, status,
  }: GetQuery) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);

      const where: FindOptionsWhere<Task> = { country, placement };

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
}
