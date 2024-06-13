import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { TaskEntity } from '../../modules/task/task.entity';
import { UserEntity } from '../../modules/user/user.entity';
import { WalletEntity } from '../../modules/wallet/wallet.entity';
import { CompletedTaskEntity } from '../../modules/task/completed-task.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('PG_DATABASE'),
        entities: [UserEntity, WalletEntity, TaskEntity, CompletedTaskEntity],
        autoLoadEntities: true,
        synchronize: configService.get('DB_SYNC') === 'true',
        logging: configService.get('DB_LOG') === 'true',
        migrationsRun: configService.get('DB_MIGRATIONS') === 'true',
        migrations: [join(__dirname, '../../migrations/**/*.js')],
      }),
    }),
  ],
})
export class DatabaseModule {}
