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
  ) {
    return this.studentService.create(id_institution, createStudentInput);
  }

  @Query('students')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterStudentInput') filterStudentInput: FilterStudentInput,
  ) {
    return this.studentService.findAll(id_institution, filterStudentInput);
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
