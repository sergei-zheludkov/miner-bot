import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../../modules/user/user.entity';

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
        entities: [UserEntity],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        // migrationsRun: true,
        // migrations: [join(__dirname, '../migration/**/*.ts')],
      }),
    }),
  ],
})

export class DatabaseModule {}
