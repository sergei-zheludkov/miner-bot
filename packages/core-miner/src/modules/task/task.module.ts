import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { WalletService } from '../wallet/wallet.service';
import { MiningService } from '../mining/mining.service';
import { NotificationService } from '../notification/notification.service';
import { TaskController } from './task.controller';
import { TaskEntity as Task } from './task.entity';
import { TaskService } from './task.service';
import { ToggleService } from '../toggle/toggle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [
    WalletService,
    MiningService,
    UserService,
    ToggleService,
    NotificationService,
    TaskService,
  ],
})
export class TaskModule {}
