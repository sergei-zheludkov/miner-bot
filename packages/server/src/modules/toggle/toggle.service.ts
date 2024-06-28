import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { ToggleEntity as Toggle } from './toggle.entity';
import { ToggleUpdateDto } from './dto';

const findOne = (tasks_repository: Repository<Toggle>, key: string) => tasks_repository
  .findOne({ where: { key } });

@Injectable()
export class ToggleService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  getToggles() {
    return this.dataSource.transaction(async (manager) => {
      // TODO вынести в кэш с обновлением по update
      const toggle_repository = manager.getRepository(Toggle);

      return (await toggle_repository.find())
        .reduce<Record<string, boolean>>((acc, { key, value }) => ({ ...acc, [key]: value }), {});
    });
  }

  async updateToggle({ key, value }: ToggleUpdateDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const tasks_repository = manager.getRepository(Toggle);

        const task_in_db = await findOne(tasks_repository, key);

        if (!task_in_db) {
          return task_in_db;
        }

        await tasks_repository.update({ key }, { value });

        return findOne(tasks_repository, key);
      });
    } catch (error) {
      logger.error('ToggleService(updateToggle):', error);

      throw new Error();
    }
  }
}
