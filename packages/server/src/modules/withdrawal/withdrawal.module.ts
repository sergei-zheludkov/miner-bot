import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { WithdrawalController } from './withdrawal.controller';
import { WithdrawalService } from './withdrawal.service';
import { WithdrawalEntity as Wallet } from './withdrawal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [WithdrawalController],
  providers: [WalletService, WithdrawalService],
})
export class WithdrawalModule {}
