import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  GenerateStudentsListUndeterminatedInput,
  GenerateStudentsListDeterminatedInput,
  GenerateAchievementsAndIndicators,
  GenerateReportAreaInput,
} from 'src/shared/interfaces/graphql';
import report from 'src/templates/spreadsheet/report';
import report1 from 'src/templates/spreadsheet/report1';
import report2 from 'src/templates/spreadsheet/report2';
import report3 from 'src/templates/spreadsheet/report3';
import reportList from 'src/templates/spreadsheet/reportList';
require('core-js/actual/array/group-by');

@Injectable()
export class ReportService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async generateStudentsListUndeterminated(
    generateStudentsListInput: GenerateStudentsListUndeterminatedInput,
  ) {
    try {
      const { id_group } = generateStudentsListInput;
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

  async generateStudentsListDeterminated(
    generateStudentsListDeterminatedInput: GenerateStudentsListDeterminatedInput,
  ) {
    try {
      const { id_group, id_course } = generateStudentsListDeterminatedInput;
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

  async generateAchievementsAndIndicators(
    generateStudentsList: GenerateAchievementsAndIndicators,
  ) {
    try {
      const { id_group, id_course, period } = generateStudentsList;
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

  async getStudentDefinitives(id_student, id_group) {
    const prisma = this.prismaManager.getClient('1059');
    // name, username, courseName, scores, teacher, hours, average, position
    const student = await prisma.student.findUnique({
      where: { id_student },
    });
    const definitives = await prisma.course_student.findMany({
      where: {
        id_student,
        course: {
          id_group,
        },
      },
      select: {
        score1: true,
        score2: true,
        score3: true,
        score4: true,
        course: {
          select: {
            name: true,
            hour: true,
            teacher: {
              select: {
                name: true,
                last_name: true,
              },
            },
          },
        },
      },
    });
    const courses = definitives.map((definitive) => {
      definitive['name'] = definitive['course']['name'];
      definitive[
        'teacher'
      ] = `${definitive['course']['teacher']['name']} ${definitive['course']['teacher']['last_name']}`;
      definitive['hour'] = definitive['course']['hour'];
      delete definitive['course'];
      return definitive;
    });
    const result = {
      student: `${student.name} ${student.last_name}`,
      username: `e${student.identification}`,
      courses,
      average: 4.0,
      position: 10,
    };
    return result;
  }

  async getGroupDefinitives(id_group) {
    const prisma = this.prismaManager.getClient('1059');
    const courses: any = await prisma.course.findMany({
      where: {
        id_group: id_group,
      },
      include: {
        teacher: {
          select: {
            name: true,
            last_name: true,
          },
        },
        /*area: {
          select: {
            name: true,
          }
        },*/
        definitives: {
          select: {
            id_student: true,
            score1: true,
            score2: true,
            score3: true,
            score4: true,
            student: {
              select: {
                identification: true,
                name: true,
                last_name: true,
              },
            },
          },
        },
      },
    });
    const coursesMap = courses.map((course: any) => {
      course['definitives'] = course['definitives'].map((element) => {
        element[
          'student'
        ] = `${element['student'].name} ${element['student'].last_name}`;
        element[
          'teacher'
        ] = `${course['teacher']['name']} ${course['teacher']['last_name']}`;
        element['hour'] = course['hour'];
        element['user'] = `e${element['student'].identification}`;
        return element;
      });
      return course;
    });
    let studentsDefinitives = {};
    coursesMap.forEach((course) => {
      course.definitives.forEach((definitive) => {
        if (studentsDefinitives[definitive.student]) {
          studentsDefinitives[definitive.student][course.name] = definitive;
        } else {
          studentsDefinitives[definitive.student] = {};
          studentsDefinitives[definitive.student][course.name] = definitive;
        }
      });
    });
    // Falta agrupar asignaturas por area
    let result = Object.keys(studentsDefinitives).map((student) => {
      const courses = Object.keys(studentsDefinitives[student]).map(
        (course) => {
          return {
            name: course,
            ...studentsDefinitives[student][course],
          };
        },
      );
      return {
        name: student,
        courses: courses,
      };
    });
    const averages = [];
    result = result.map((student) => {
      const sumCourses = student.courses.reduce(
        (total, current) => total + Number(current.score1),
        0,
      );
      const coursesAverage = sumCourses / student.courses.length;
      student['average'] = Number(coursesAverage.toFixed(2));
      averages.push({ name: student.name, average: student['average'] });
      return student;
    });
    averages.sort((a, b) => b.average - a.average);
    result = result.map((student) => {
      student['position'] = averages.findIndex(
        (average) => average.name == student.name,
      );
      return student;
    });
    return result;
  }

  async generateReportArea(generateReportAreaInput: GenerateReportAreaInput) {
    const prisma = this.prismaManager.getClient('1059');
    const { id_group, id_student, report_options } = generateReportAreaInput;
    try {
      const group = await prisma.group.findUnique({
        where: { id_group: id_group },
      });
      const areas = await prisma.area.findMany();
      if (id_student) {
        const data = await this.getStudentDefinitives(id_student, id_group);
        return report(group, data, report_options);
      } else {
        const data = await this.getGroupDefinitives(id_group);
        return reportList(group, data, report_options);
      }
    } catch (error) {
      throw error;
    }
  }
}
