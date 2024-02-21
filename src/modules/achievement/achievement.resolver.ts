import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AchievementService } from './achievement.service';
import {
  CreateAchievementInput,
  FilterAchievementInput,
  FilterQualificationInput,
  UpdateAchievementInput,
  UpdateQualificationInput,
} from 'src/shared/interfaces/graphql';

@Resolver('Achievement')
export class AchievementResolver {
  constructor(private readonly achievementService: AchievementService) { }

  @Mutation('createAchievement')
  create(
    @Args('id_institution') id_institution: string,
    @Args('createAchievementInput')
    createAchievementInput: CreateAchievementInput,
  ) {
    return this.achievementService.create(
      id_institution,
      createAchievementInput,
    );
  }

  @Query('achievements')
  findAll(
    @Args('id_institution') id_institution: string,
    @Args('filterAchievementInput')
    filterAchievementInput: FilterAchievementInput,
  ) {
    return this.achievementService.findAll(
      id_institution,
      filterAchievementInput,
    );
  }

  @Mutation('updateAchievement')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateAchievementInput')
    updateAchievementInput: UpdateAchievementInput,
  ) {
    return this.achievementService.update(
      id_institution,
      updateAchievementInput,
    );
  }

  @Mutation('deleteAchievement')
  delete(
    @Args('id_institution') id_institution: string,
    @Args('id_achievement') id_achievement: number,
  ) {
    return this.achievementService.delete(id_institution, id_achievement);
  }

  @Query('studentQualifications')
  findQualifications(
    @Args('id_institution') id_institution: string,
    @Args('filterQualificationInput')
    filterQualificationInput: FilterQualificationInput,
  ) {
    return this.achievementService.findQualifications(
      id_institution,
      filterQualificationInput,
    );
  }

  @Mutation('updateQualification')
  updateQualification(
    @Args('id_institution') id_institution: string,
    @Args('updateQualificationInput')
    updateQualificationInput: UpdateQualificationInput,
  ) {
    return this.achievementService.updateQualification(
      id_institution,
      updateQualificationInput,
    );
  }
}
