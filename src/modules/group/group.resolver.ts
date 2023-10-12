import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GroupService } from './group.service';
import {
  CreateGroupInput,
  FilterGroupInput,
  UpdateGroupInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Group')
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation('createGroup')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createGroupInput') createGroupInput: CreateGroupInput,
  ) {
    return this.groupService.create(id_institution, createGroupInput);
  }

  @Query('groups')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterGroupInput') filterGroupInput: FilterGroupInput,
  ) {
    return this.groupService.findAll(id_institution, filterGroupInput);
  }

  @Query('groupByID')
  findOne(
    @Args('id_institution') id_institution: string,
    @Args('id_groupd') id_group: number,
  ) {
    return this.groupService.findOne(id_institution, id_group);
  }

  @Mutation('updateGroup')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateGroupInput') updateGroupInput: UpdateGroupInput,
  ) {
    return this.groupService.update(id_institution, updateGroupInput);
  }

  @Mutation('deleteGroup')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_group') id_group: number,
  ) {
    return this.groupService.delete(id_institution, id_group);
  }
}
