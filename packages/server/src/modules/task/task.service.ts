import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { GenderEnum } from '@common_bot/shared';
import { logger } from '../../libs/logger/logger.instance';
import { UserService } from '../user/user.service';
import { MiningService } from '../mining/mining.service';
import { CompletedTaskEntity as CompletedTask } from './completed-task.entity';
import { TaskEntity as Task } from './task.entity';
import {
  TaskCreateDto,
  TaskUpdateDto,
  CompletedTaskCreateDto,
  CompletedTasksCreateDto,
} from './dto';
import type { GetQuery } from './types';

const findOne = (tasks_repository: Repository<Task>, id: number) => tasks_repository
  .findOne({ where: { id } });

@Injectable()
export class TaskService {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => MiningService))
    private readonly miningService: MiningService,
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
    user_id, limit, offset, country, placement, status, gender,
  }: GetQuery) {
    return this.dataSource.transaction(async (manager) => {
      // const where: FindOptionsWhere<Task> = {
      //   country,
      //   placement,
      //   gender: Or(Equal(gender), Equal(GenderEnum.ALL)),
      // };

      // if (status === 'active') {
      //   where.available_limit = MoreThan(0);
      // }
      //
      // if (status === 'finished') {
      //   where.available_limit = 0;
      // }

      const getAvailableLimitQuery = () => {
        if (status === 'active') {
          return 'available_limit > 0 AND';
        }

        if (status === 'finished') {
          return 'available_limit = 0 AND';
        }

        return '';
      };

      // TODO переписать, созвонившись с Серегой Мазаевым или Сашей Махориным
      return manager.query(`
        SELECT * FROM tasks 
        WHERE deleted IS NULL 
        AND country = '${country}'
        AND placement = '${placement}'
        AND (gender = '${GenderEnum.ALL}' OR gender = '${gender}')
        AND ${getAvailableLimitQuery()}
        id NOT IN (SELECT task_id FROM completed_tasks WHERE user_id = '${user_id}')
        ORDER BY id ASC
        LIMIT ${limit}
        OFFSET ${offset}
      `);

      // return manager.getRepository(Task).find({
      //   where,
      //   take: limit,
      //   skip: offset,
      // });

      // .getRepository(Task)
      // .createQueryBuilder('task')
      // .leftJoinAndSelect('completed_task.user', 'user')
      // .where(where)
      // .take(limit)
      // .skip(offset)
      // .getMany();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // console.log('TASKS:', (await tasks));
      // console.log('-- --- -- --- --- -- - - - -- - -- - - -- - - -- - - -- - -- - -- - - -');
    });
  }

  async createTask(data: TaskCreateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Task);

        // Нюансы передачи decimal по api
        const new_task_data = { ...data, mining_rate: 0 };

        if (!Number.isNaN(data.mining_rate)) {
          new_task_data.mining_rate = Number(data.mining_rate);
        }
        // --- --- --- --- --- --- --- ---

        const new_task = tasks_repository.create(new_task_data);

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

  completeTasks({ user_id, tasks }: CompletedTasksCreateDto) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Task);
        const completed_tasks_repository = manager.getRepository(CompletedTask);

        Promise.all(
          tasks.map(async (id) => {
            await tasks_repository.increment({ id }, 'complete_count', 1);
            await tasks_repository.decrement({ id }, 'available_limit', 1);
          }),
        );

        await this.userService.updateUser({
          id: user_id,
          increase_completed_tasks_count: tasks.length,
        });

        const completed_tasks_data = tasks.map((id) => ({ user: user_id, task: id }));

        const completed_tasks = completed_tasks_repository.create(completed_tasks_data);

        return completed_tasks_repository.save(completed_tasks);
      });
    } catch (error) {
      logger.error('TaskService(completeTasks):', error);

      throw new Error();
    }
  }

  completeTask({
    user_id, task_id, currency, mining_rate,
  }: CompletedTaskCreateDto) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Task);
        const completed_tasks_repository = manager.getRepository(CompletedTask);

        await tasks_repository.increment({ id: task_id }, 'complete_count', 1);
        await tasks_repository.decrement({ id: task_id }, 'available_limit', 1);

        if (!Number.isNaN(mining_rate)) {
          await this.miningService.updateMining({
            id: user_id,
            currency,
            mining_rate,
            started: new Date(),
          });
        }

        await this.userService.updateUser({ id: user_id, increase_completed_tasks_count: 1 });

        return completed_tasks_repository.save({ user: user_id, task: task_id });
      });
    } catch (error) {
      logger.error('TaskService(completeTasks):', error);

      throw new Error();
    }
  }
}
