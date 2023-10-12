import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateAchievementInput,
  FilterAchievementInput,
  FilterQualificationInput,
  UpdateAchievementInput,
  UpdateQualificationInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class AchievementService {
  async create(
    id_institution: string,
    createAchievementInput: CreateAchievementInput,
  ) {
    return await clients[id_institution].achievement.create({
      data: createAchievementInput,
    });
  }

  async findAll(
    id_institution: string,
    filterAchievementInput: FilterAchievementInput,
  ) {
    return await clients[id_institution].achievement.findMany({
      where: filterAchievementInput,
    });
  }

  async update(
    id_institution: string,
    updateAchievementInput: UpdateAchievementInput,
  ) {
    return await clients[id_institution].achievement.update({
      where: { id_achievement: updateAchievementInput.id_achievement },
      data: updateAchievementInput,
    });
  }

  async delete(id_institution: string, id_achievement: number) {
    return await clients[id_institution].achievement.delete({
      where: { id_achievement: id_achievement },
    });
  }

  async findQualifications(
    id_institution: string,
    filterQualificationInput: FilterQualificationInput,
  ) {
    return await clients[id_institution].achievement_student.findMany({
      where: filterQualificationInput,
    });
  }

  async updateQualification(
    id_institution: string,
    updateQualificationInput: UpdateQualificationInput,
  ) {
    return await clients[id_institution].achievement_student.update({
      where: { id_achie_stu: updateQualificationInput.id_achie_stu },
      data: updateQualificationInput,
    });
  }
}
