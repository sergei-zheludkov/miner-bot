import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './libs/db/db.module';
import { GlobalHttpModule } from './libs/http/http.module';
import { GlobalCacheModule } from './libs/cache/cache.module';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { MiningModule } from './modules/mining/mining.module';
import { WithdrawalModule } from './modules/withdrawal/withdrawal.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    GlobalCacheModule,
    GlobalHttpModule,
    DatabaseModule,
    UserModule,
    TaskModule,
    WalletModule,
    MiningModule,
    WithdrawalModule,
    NotificationModule,
  ],
})
export class AppModule {}
