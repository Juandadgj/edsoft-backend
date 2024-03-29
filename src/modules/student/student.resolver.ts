import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import {
  CreateStudentInput,
  UpdateStudentInput,
  FilterStudentInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation('createStudent')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
    @Args('id_group') id_group: number,
  ) {
    return this.studentService.create(
      id_institution,
      createStudentInput,
      id_group,
    );
  }

  @Query('studentsByGroup')
  findByGroup(
    @Args('id_institution') id_institution: string,
    @Args('id_group') id_group: number,
  ) {
    return this.studentService.findByGroup(id_institution, id_group);
  }

  @Query('students')
  find(
    @Args('id_institution') id_institution: string,
    @Args('filterStudentInput') filterStudentInput: FilterStudentInput,
  ) {
    return this.studentService.find(id_institution, filterStudentInput);
  }

  @Query('studentByID')
  findOne(
    @Args('id_institution') id_institution: string,
    @Args('id_student') id_student: number,
  ) {
    return this.studentService.findOne(id_institution, id_student);
  }

  @Mutation('updateStudent')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(id_institution, updateStudentInput);
  }

  @Mutation('deleteStudent')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_student') id_student: number,
  ) {
    return this.studentService.delete(id_institution, id_student);
  }
}
