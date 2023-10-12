import { Module } from '@nestjs/common';
import { TypeQualificationService } from './type-qualification.service';
import { TypeQualificationResolver } from './type-qualification.resolver';

@Module({
  providers: [TypeQualificationResolver, TypeQualificationService],
})
export class TypeQualificationModule {}
