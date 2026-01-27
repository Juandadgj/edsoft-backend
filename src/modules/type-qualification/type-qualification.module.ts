import { Module } from '@nestjs/common';
import { TypeQualificationService } from './type-qualification.service';
import { TypeQualificationController } from './type-qualification.controller';

@Module({
  controllers: [TypeQualificationController],
  providers: [TypeQualificationService],
})
export class TypeQualificationModule {}
