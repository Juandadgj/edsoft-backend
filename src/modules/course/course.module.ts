import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, TeacherService],
})
export class CourseModule {}
