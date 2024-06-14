import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { MiningService } from '../mining/mining.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { UserCronService } from './user-cron.service';
import { UserEntity as User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [WalletService, MiningService, UserService],
})
export class UserModule {}
