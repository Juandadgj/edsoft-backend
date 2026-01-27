import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { FilterAchievementDto } from './dto/filter-achievement.dto';
import { FilterQualificationDto, UpdateQualificationsDto } from './dto/qualification.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
require('core-js/actual/array/group-by');

@Injectable()
export class AchievementService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createAchievementDto: CreateAchievementDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    const course = await prisma.course.findUnique({
      where: { id_course: createAchievementDto.id_course },
    });
    const group = await prisma.group.findUnique({
      where: { id_group: course.id_group },
    });
    const enrollments = await this.prismaManager.getClient('1059').enrollment.findMany({
      where: { id_group: group.id_group },
    });
    const achievement = await prisma.achievement.create({
      data: createAchievementDto,
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
    filterAchievementDto: FilterAchievementDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.achievement.findMany({
      where: filterAchievementDto,
    });
  }

  async update(
    id_institution: string,
    updateAchievementDto: UpdateAchievementDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.achievement.update({
      where: { id_achievement: updateAchievementDto.id_achievement },
      data: updateAchievementDto,
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
    filterQualificationDto: FilterQualificationDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    const achievements = await prisma.achievement.findMany({
      select: {
        id_achievement: true,
      },
      where: {
        id_course: filterQualificationDto.id_course,
        period: filterQualificationDto.period,
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
    updateQualificationsDto: UpdateQualificationsDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    for (const qualification of updateQualificationsDto.qualifications) {
      await prisma.achievement_student.update({
        where: { id_achie_stu: qualification.id_achie_stu },
        data: {
          score: qualification.score,
        },
      });
    }
    return updateQualificationsDto.qualifications;
  }
}
