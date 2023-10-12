import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TypeQualificationService } from './type-qualification.service';
import { CreateTypeQualificationInput } from 'src/shared/interfaces/graphql';

@Resolver('TypeQualification')
export class TypeQualificationResolver {
  constructor(
    private readonly typeQualificationService: TypeQualificationService,
  ) {}

  @Mutation('createTypeQualification')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createTypeQualificationInput')
    createTypeQualificationInput: CreateTypeQualificationInput,
  ) {
    return this.typeQualificationService.create(
      id_institution,
      createTypeQualificationInput,
    );
  }

  @Query('typeQualifications')
  findAll(@Args('id_institution') id_institution: string) {
    return this.typeQualificationService.findAll(id_institution);
  }

  @Mutation('deleteTypeQualification')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_type_qual') id_type_qual: number,
  ) {
    return this.typeQualificationService.delete(id_institution, id_type_qual);
  }
}
