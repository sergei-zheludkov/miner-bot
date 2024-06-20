import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { MiningService } from '../mining/mining.service';
import { UserController } from './user.controller';
import { UserEntity as User } from './user.entity';
import { UserService } from './user.service';
// import { UserCronService } from './user-cron.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [WalletService, MiningService, UserService],
})
export class UserModule {}
