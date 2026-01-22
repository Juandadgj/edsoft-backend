import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionResolver } from './institution.resolver';
import { PrismaService } from 'src/config/database/prisma.service';
import { AwsModule } from '../aws/aws.module';

@Module({
  imports: [AwsModule],
  providers: [
    InstitutionResolver,
    InstitutionService,
    PrismaService,
  ],
})

export class InstitutionModule {}
