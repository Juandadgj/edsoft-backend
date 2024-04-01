import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ScholarYearService } from './scholar-year.service';
import {
  CreateScholarYearInput,
  UpdateScholarYearInput,
} from 'src/shared/interfaces/graphql';

@Resolver('ScholarYear')
export class ScholarYearResolver {
  constructor(private readonly scholarYearService: ScholarYearService) {}

  @Mutation('createScholarYear')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createScholarYearInput')
    createScholarYearInput: CreateScholarYearInput,
  ) {
    return this.scholarYearService.create(
      id_institution,
      createScholarYearInput,
    );
  }

  @Query('scholarYears')
  findAll(@Args('id_institution') id_institution: string) {
    return this.scholarYearService.findAll(id_institution);
  }

  @Query('scholearYearSelected')
  findSelected(@Args('id_institution') id_institution: string) {
    return this.scholarYearService.findSelected(id_institution);
  }

  @Mutation('updateScholarYear')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateScholarYearInput')
    updateScholarYearInput: UpdateScholarYearInput,
  ) {
    return this.scholarYearService.update(
      id_institution,
      updateScholarYearInput,
    );
  }

  @Mutation('deleteScholarYear')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_year') id_year: number,
  ) {
    return this.scholarYearService.delete(id_institution, id_year);
  }

  @Mutation('selectScholarYear')
  select(
    @Args('id_institution') id_institution: string,
    @Args('id_year') id_year: number,
  ) {
    return this.scholarYearService.select(id_institution, id_year);
  }
}
