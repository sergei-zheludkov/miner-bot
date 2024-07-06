import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToggleController } from './toggle.controller';
import { ToggleEntity as Task } from './toggle.entity';
import { ToggleService } from './toggle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [ToggleController],
  providers: [ToggleService],
})
export class ToggleModule {}
