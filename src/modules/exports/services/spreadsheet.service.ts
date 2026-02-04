import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import report1 from 'src/templates/spreadsheet/report1';
import {
  AchievementsAndIndicatorsDto,
  StudentsListDeterminatedDto,
  StudentsListUndeterminatedDto,
} from '../dto/spreadsheet.dto';
import report3 from 'src/templates/spreadsheet/report3';
import report2 from 'src/templates/spreadsheet/report2';

@Injectable()
export class SpreadsheetService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async studentsListUndeterminated(
    studentsListDto: StudentsListUndeterminatedDto,
  ) {
    try {
      const { id_group } = studentsListDto;
      const prisma = this.prismaManager.getClient('1059');
      const students = await prisma.enrollment.findMany({
        where: {
          id_group,
        },
        include: {
          student: true,
        },
      });
      const htmlContent = report1(students);
      return htmlContent;
    } catch (error) {
      throw error;
    }
  }

  async studentsListDeterminated(studentsListDto: StudentsListDeterminatedDto) {
    try {
      const { id_group, id_course } = studentsListDto;
      const prisma = this.prismaManager.getClient('1059');
      const students = await prisma.enrollment.findMany({
        where: {
          id_group,
        },
        include: {
          student: true,
        },
      });
      const courses = await prisma.course.findUnique({
        where: {
          id_course,
        },
        include: {
          teacher: true,
          area: true,
        },
      });
      const htmlContent = report3(students, courses);
      return htmlContent;
    } catch (error) {
      throw error;
    }
  }

  async achievementsAndIndicators(
    studentsList: AchievementsAndIndicatorsDto,
  ) {
    try {
      const { id_group, id_course, period } = studentsList;
      const prisma = this.prismaManager.getClient('1059');
      const students = await prisma.enrollment.findMany({
        where: {
          id_group,
        },
        include: {
          student: true,
        },
      });
      const achievements = await prisma.achievement.findMany({
        where: {
          id_course,
          period,
        },
      });
      const { teacher, area } = await prisma.course
        .findMany({
          where: {
            id_course,
          },
          include: {
            teacher: true,
            area: true,
          },
        })
        .then((result) => result[0]);

      const htmlContent = report2(students, achievements, teacher, area);
      return htmlContent;
    } catch (error) {
      throw error;
    }
  }
}
