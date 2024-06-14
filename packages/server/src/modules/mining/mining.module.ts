import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { MiningController } from './mining.controller';
import { MiningService } from './mining.service';
import { MiningEntity as Mining } from './mining.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mining])],
  controllers: [MiningController],
  providers: [WalletService, MiningService],
})
export class MiningModule {}
