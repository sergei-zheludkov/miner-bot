import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { TaskService } from '../task/task.service';
import { WalletService } from '../wallet/wallet.service';
import { MiningController } from './mining.controller';
import { MiningEntity as Mining } from './mining.entity';
import { MiningService } from './mining.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mining])],
  controllers: [MiningController],
  providers: [UserService, WalletService, TaskService, MiningService],
})
export class MiningModule {}
