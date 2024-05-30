import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './libs/db/db.module';
import { GlobalHttpModule } from './libs/http/http.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    GlobalHttpModule,
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {}
