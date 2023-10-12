import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AbsenceService } from './absence.service';
import {
  CreateAbsenceInput,
  FilterAbsenceInput,
  UpdateAbsenceInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Absence')
export class AbsenceResolver {
  constructor(private readonly absenceService: AbsenceService) {}

  @Mutation('createAbsence')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createAbsenceInput') createAbsenceInput: CreateAbsenceInput,
  ) {
    return this.absenceService.create(id_institution, createAbsenceInput);
  }

  @Query('absences')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterAbsenceInput') filterAbsenceInput: FilterAbsenceInput
  ) {
    return this.absenceService.findAll(id_institution, filterAbsenceInput);
  }

  @Mutation('updateAbsence')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateAbsenceInput') updateAbsenceInput: UpdateAbsenceInput,
  ) {
    return this.absenceService.update(id_institution, updateAbsenceInput);
  }

  @Mutation('deleteAbsence')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_absence') id_absence: number,
  ) {
    return this.absenceService.delete(id_institution, id_absence);
  }
}
