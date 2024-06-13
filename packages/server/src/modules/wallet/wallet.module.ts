import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from './wallet.service';
import { WalletEntity as Wallet } from './wallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [/* WalletController */],
  providers: [WalletService],
})
export class WalletModule {}
