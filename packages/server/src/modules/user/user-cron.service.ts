import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { DATE } from '@common_bot/shared';
import { Repository } from 'typeorm';
import { logger } from '../../libs/logger/logger.instance';
import { toPromise } from '../../helpers';
import { UserEntity as User } from './user.entity';

const { getTimeAsNumber } = DATE;

const EVERY_30_MINUTES = '0 */30 8-21 * * *';
const logger_message = 'UserCronService(startReminder)[POST]:';
const error_message = 'Error with http req in User Cron';

@Injectable()
class UserCronService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getURL(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/message/${userid}`;
  }

  @Cron(EVERY_30_MINUTES, { timeZone: 'Europe/Moscow' })
  async startReminder() {
    try {
      const reminder_time = getTimeAsNumber();
      const users = await this.user.find({ where: { reminder_time }, select: ['id'] });

      users.forEach(({ id }) => {
        const request = this.httpService.post(this.getURL(id), { message: '' });
        toPromise({ request, logger_message, error_message });
      });
    } catch (error) {
      logger.error('UserCronService(startReminder):', error);
      throw new Error('Error with User Cron');
    }
  }
}

export { UserCronService };
