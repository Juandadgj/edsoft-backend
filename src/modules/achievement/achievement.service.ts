import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateAchievementInput,
  FilterAchievementInput,
  FilterQualificationInput,
  UpdateAchievementInput,
  UpdateQualificationsInput,
} from 'src/shared/interfaces/graphql';
require('core-js/actual/array/group-by');

@Injectable()
export class AchievementService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createAchievementInput: CreateAchievementInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    const course = await prisma.course.findUnique({
      where: { id_course: createAchievementInput.id_course },
    });
    const group = await prisma.group.findUnique({
      where: { id_group: course.id_group },
    });
    const enrollments = await this.prismaManager.getClient('1059').enrollment.findMany({
      where: { id_group: group.id_group },
    });
    const achievement = await prisma.achievement.create({
      data: createAchievementInput,
    });
    const achievement_student_map = enrollments.map((element) => ({
      id_achievement: achievement.id_achievement,
      id_student: element.id_student,
    }));
    await prisma.achievement_student.createMany({
      data: achievement_student_map,
    });
    return achievement;
  }

  async findAll(
    id_institution: string,
    filterAchievementInput: FilterAchievementInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.achievement.findMany({
      where: filterAchievementInput,
    });
  }

  async update(
    id_institution: string,
    updateAchievementInput: UpdateAchievementInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.achievement.update({
      where: { id_achievement: updateAchievementInput.id_achievement },
      data: updateAchievementInput,
    });
  }

  async delete(id_institution: string, id_achievement: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.achievement.delete({
      where: { id_achievement: id_achievement },
    });
  }

  async findQualifications(
    id_institution: string,
    filterQualificationInput: FilterQualificationInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    const achievements = await prisma.achievement.findMany({
      select: {
        id_achievement: true,
      },
      where: {
        id_course: filterQualificationInput.id_course,
        period: filterQualificationInput.period,
      },
    });
    const achievementsIds = achievements.map(
      (element) => element.id_achievement,
    );
    const qualifications = await prisma.achievement_student.findMany({
      where: {
        id_achievement: {
          in: achievementsIds,
        },
      },
      include: {
        student: true,
      },
    });
    const qualMap: any = qualifications.map((element: any) => {
      element[
        'student'
      ] = `${element['student'].name} ${element['student'].last_name}`;
      return element;
    });
    const qualGroup = qualMap.groupBy((qualification) => qualification.student);
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
    const prisma = this.prismaManager.getClient(id_institution);
    for (const qualification of updateQualificationsInput.qualifications) {
      await prisma.achievement_student.update({
        where: { id_achie_stu: qualification.id_achie_stu },
        data: {
          score: qualification.score,
        },
      });
    }
    return updateQualificationsInput.qualifications;
  }
}
