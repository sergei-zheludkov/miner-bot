import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cron } from '@nestjs/schedule';
import { Cache } from 'cache-manager';
import { DATE } from '@common_bot/shared';
import { CRON } from '../../constants';
import { UserService } from './user.service';

const { getStartToday, getStartMonth } = DATE;

@Injectable()
export class UserCronService implements OnApplicationBootstrap {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private readonly userService: UserService,
  ) {}

  onApplicationBootstrap(): void {
    this.leaders();
  }

  @Cron(CRON.EVERY_1_HOUR, { timeZone: 'Europe/Moscow' })
  async leaders() {
    const todayStart = getStartToday().toDate();
    const monthStart = getStartMonth().toDate();

    const today = await this.userService.getLeaders(todayStart);
    const month = await this.userService.getLeaders(monthStart);
    const all_time = await this.userService.getLeaders();

    await this.cacheManager.set('leaders', { today, month, all_time }, 3_610_000);
  }
}
