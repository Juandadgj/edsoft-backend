import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionResolver } from './institution.resolver';
import { PrismaService } from 'src/config/database/prisma.service';

@Module({
  imports: [],
  providers: [
    InstitutionResolver,
    InstitutionService,
    PrismaService,
  ],
})

export class InstitutionModule {}
