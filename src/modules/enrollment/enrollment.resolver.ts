import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EnrollmentService } from './enrollment.service';
import {
  CreateEnrollmentInput,
  FilterEnrollmentInput,
  UpdateEnrollmentInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Enrollment')
export class EnrollmentResolver {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Mutation('createEnrollment')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createEnrollmentInput') createEnrollmentInput: CreateEnrollmentInput,
  ) {
    return this.enrollmentService.create(id_institution, createEnrollmentInput);
  }

  @Query('enrollments')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterEnrollmentInput') filterEnrollmentInput: FilterEnrollmentInput,
  ) {
    return this.enrollmentService.findAll(
      id_institution,
      filterEnrollmentInput,
    );
  }

  @Query('enrollmentByID')
  findOne(
    @Args('id_institution') id_institution: string,
    @Args('id_enrollment') id_enrollment: number,
  ) {
    return this.enrollmentService.findOne(id_institution, id_enrollment);
  }

  @Mutation('updateEnrollment')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateEnrollmentInput') updateEnrollmentInput: UpdateEnrollmentInput,
  ) {
    return this.enrollmentService.update(id_institution, updateEnrollmentInput);
  }

  @Mutation('deleteEnrollment')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_enrollment') id_enrollment: number,
  ) {
    return this.enrollmentService.delete(id_institution, id_enrollment);
  }
}
