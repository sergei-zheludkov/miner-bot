import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { GenderEnum } from '@common_bot/shared';
import { logger } from '../../libs/logger/logger.instance';
import { UserService } from '../user/user.service';
import { CompletedTasksCreateDto, TaskCreateDto, TaskUpdateDto } from './dto';
import { CompletedTaskEntity as CompletedTask } from './completed-task.entity';
import { TaskEntity as Task } from './task.entity';
import { GetQuery } from './types';

const findOne = (tasks_repository: Repository<Task>, id: number) => tasks_repository
  .findOne({
    where: { id },
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
        SELECT * FROM tasks WHERE
        country = '${country}' AND
        placement = '${placement}' AND
        (gender = '${GenderEnum.ALL}' OR gender = '${gender}') AND
        ${getAvailableLimitQuery()}
        id NOT IN (SELECT task_id FROM completed_tasks WHERE user_id = '${user_id}')
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
        const new_task_data = { ...data, increase_mining_rate: 0 };

        if (!Number.isNaN(data.increase_mining_rate)) {
          new_task_data.increase_mining_rate = Number(data.increase_mining_rate);
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

  completeTasks(user_id: string, { tasks, increase_mining_rate }: CompletedTasksCreateDto) {
    return this.dataSource.transaction(async (manager) => {
      const tasks_repository = manager.getRepository(Task);
      const completed_tasks_repository = manager.getRepository(CompletedTask);

      Promise.all(
        tasks.map(async (id) => {
          await tasks_repository.increment({ id }, 'complete_count', 1);
          await tasks_repository.decrement({ id }, 'available_limit', 1);
        }),
      );

      const user_data = {
        id: user_id,
        increase_mining_rate: 0,
        increase_complete_tasks_count: tasks.length,
        mining_rate_started: new Date(),
      };

      if (!Number.isNaN(increase_mining_rate)) {
        user_data.increase_mining_rate = Number(increase_mining_rate);
      }

      await this.userService.updateUser(user_data);

      const completed_tasks_data = tasks.map((id) => ({ user: user_id, task: id }));

      const completed_tasks = completed_tasks_repository.create(completed_tasks_data);

      return completed_tasks_repository.save(completed_tasks);
    });
  }
}
