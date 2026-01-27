import { Module } from '@nestjs/common';
import { ScholarYearService } from './scholar-year.service';
import { ScholarYearController } from './scholar-year.controller';

@Module({
  controllers: [ScholarYearController],
  providers: [ScholarYearService],
})
export class ScholarYearModule {}
