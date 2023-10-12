import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeaturedService } from './featured.service';
import { CreateFeaturedInput, FilterFeaturedInput } from 'src/shared/interfaces/graphql';

@Resolver('Featured')
export class FeaturedResolver {
  constructor(private readonly featuredService: FeaturedService) {}

  @Mutation('createFeatured')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createFeaturedInput') createFeaturedInput: CreateFeaturedInput,
  ) {
    return this.featuredService.create(id_institution, createFeaturedInput);
  }

  @Query('featured')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterFeaturedInput') filterFeaturedInput: FilterFeaturedInput,
  ) {
    return this.featuredService.findAll(id_institution, filterFeaturedInput);
  }

  @Mutation('deleteFeatured')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_featured') id_featured: number,
  ) {
    return this.featuredService.delete(id_institution, id_featured);
  }
}
