import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { WithdrawalController } from './withdrawal.controller';
import { WithdrawalEntity as Withdrawal } from './withdrawal.entity';
import { WithdrawalService } from './withdrawal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Withdrawal])],
  controllers: [WithdrawalController],
  providers: [WalletService, WithdrawalService],
})
export class WithdrawalModule {}
