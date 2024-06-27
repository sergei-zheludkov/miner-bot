import { Module, Global } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [CacheModule.register({ isGlobal: true })],
  exports: [CacheModule],
})
export class GlobalCacheModule {}
