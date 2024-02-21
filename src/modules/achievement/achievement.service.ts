import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateAchievementInput,
  FilterAchievementInput,
  FilterQualificationInput,
  UpdateAchievementInput,
  UpdateQualificationsInput,
} from 'src/shared/interfaces/graphql';
require("core-js/actual/array/group-by");

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
    const achievements = await clients[id_institution].achievement.findMany({
      select: {
        id_achievement: true,
      },
      where: {
        id_course: filterQualificationInput.id_course,
        period: filterQualificationInput.period
      }
    });
    const achievementsIds = achievements.map(element => element.id_achievement);
    const qualifications = await clients[id_institution].achievement_student.findMany({
      where: {
        id_achievement: {
          in: achievementsIds,
        },
      },
      include: {
        student: true,
      }
    });
    const qualMap: any = qualifications.map((element: any) => {
      element['student'] = `${element['student'].name} ${element['student'].last_name}`;
      return element;
    });
    const qualGroup = qualMap.groupBy(qualification => qualification.student);
    const result = Object.keys(qualGroup).map((studentName) => ({
      student: studentName,
      qualifications: qualGroup[studentName],
    }));
    return result;
  }

  async updateQualifications(
    id_institution: string,
    updateQualificationsInput: UpdateQualificationsInput,
  ) {
    for (const qualification of updateQualificationsInput.qualifications) {
      await clients[id_institution].achievement_student.update({
        where: { id_achie_stu: qualification.id_achie_stu },
        data: {
          score: qualification.score,
        },
      });
    }
    return updateQualificationsInput.qualifications;
  }
}
