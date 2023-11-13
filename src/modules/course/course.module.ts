import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  providers: [CourseResolver, CourseService, TeacherService],
})
export class CourseModule {}
