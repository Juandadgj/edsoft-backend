import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import {
  CreateTeacherInput,
  FilterTeacherInput,
  UpdateTeacherInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Teacher')
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation('createTeacher')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createTeacherInput') createTeacherInput: CreateTeacherInput,
  ) {
    return this.teacherService.create(id_institution, createTeacherInput);
  }

  @Query('teachers')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterTeacherInput') filterTeacherInput: FilterTeacherInput,
  ) {
    return this.teacherService.findAll(id_institution, filterTeacherInput);
  }

  @Query('teacherByID')
  findOne(
    @Args('id_institution') id_institution: string,
    @Args('id_teacher') id_teacher: number,
  ) {
    return this.teacherService.findOne(id_institution, id_teacher);
  }

  @Mutation('updateTeacher')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput,
  ) {
    return this.teacherService.update(id_institution, updateTeacherInput);
  }

  @Mutation('deleteTeacher')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_teacher') id_teacher: number,
  ) {
    return this.teacherService.delete(id_institution, id_teacher);
  }
}
