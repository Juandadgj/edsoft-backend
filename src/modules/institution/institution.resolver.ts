import { Resolver, Query } from '@nestjs/graphql';
import { InstitutionService } from './institution.service';

@Resolver('Institution')
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Query('institutions')
  findAll() {
    return this.institutionService.findAll();
  }
}
