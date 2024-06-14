import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskEntity as User } from './task.entity';
import { WalletService } from '../wallet/wallet.service';
import { MiningService } from '../mining/mining.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TaskController],
  providers: [WalletService, UserService, MiningService, TaskService],
})
export class TaskModule {}
