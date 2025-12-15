import { Global, Module } from '@nestjs/common';
import { PrismaClientManager } from './prisma-client.manager';

@Global()
@Module({
  providers: [PrismaClientManager],
  exports: [PrismaClientManager],
})
export class PrismaClientModule {}
