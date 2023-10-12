import { Module } from '@nestjs/common';
import { ScholarYearService } from './scholar-year.service';
import { ScholarYearResolver } from './scholar-year.resolver';

@Module({
  providers: [ScholarYearResolver, ScholarYearService],
})
export class ScholarYearModule {}
