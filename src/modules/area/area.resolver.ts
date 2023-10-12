import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AreaService } from './area.service';
import {
  CreateAreaInput,
  FilterAreaInput,
  UpdateAreaInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Area')
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Mutation('createArea')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createAreaInput') createAreaInput: CreateAreaInput,
  ) {
    return this.areaService.create(id_institution, createAreaInput);
  }

  @Query('areas')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterAreaInput') filterAreaInput: FilterAreaInput,
  ) {
    return this.areaService.findAll(id_institution, filterAreaInput);
  }

  @Mutation('updateArea')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateAreaInput') updateAreaInput: UpdateAreaInput,
  ) {
    return this.areaService.update(id_institution, updateAreaInput);
  }

  @Mutation('deleteArea')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_area') id_area: number,
  ) {
    return this.areaService.delete(id_institution, id_area);
  }
}
