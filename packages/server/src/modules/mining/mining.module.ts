import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import { MiningController } from './mining.controller';
import { MiningEntity as Mining } from './mining.entity';
import { MiningService } from './mining.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mining])],
  controllers: [MiningController],
  providers: [WalletService, MiningService],
})
export class MiningModule {}
