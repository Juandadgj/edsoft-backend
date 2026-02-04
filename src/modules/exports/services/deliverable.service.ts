import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  GenerateDeliverableDto,
  ReportDictionary,
  CertifiedStudentDictionary,
  CertifiedStudentReportDto,
} from '../dto/deliverable.dto';
import report from 'src/templates/spreadsheet/report';
import reportList from 'src/templates/spreadsheet/reportList';
import { certifiedStudentTemplate } from 'src/templates/spreadsheet/certified-student';
import { studentIdCardTemplate } from 'src/templates/deliverables/student-id-card';
import { generalGradeTemplate } from 'src/templates/deliverables/general-grade';
import { gradeWithAchievementsTemplate } from 'src/templates/deliverables/grade-with-achievements';
import { configurableReportsTemplate } from 'src/templates/deliverables/configurable-reports';
require('core-js/actual/array/group-by');

// Mock institution data
const mockInstitution = {
  id: 1059,
  name: 'Institución Educativa',
  address: '',
  phone: '',
  email: '',
};

@Injectable()
export class DeliverableService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

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

  async getGeneralGrade(dto: GenerateDeliverableDto): Promise<string> {
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_year, id_student } = dto;
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
            achievements: true,
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
    return generalGradeTemplate(student, definitives, institution);
  }

  async getGradeWithAchievements(dto: GenerateDeliverableDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_year, id_student } = dto;
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
            achievements: true,
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
    return gradeWithAchievementsTemplate(student, definitives, institution);
  }

  async getGradeWithIndicators(dto: GenerateDeliverableDto): Promise<string> {
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_year, id_student } = dto;
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
            achievements: true,
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
    return gradeWithAchievementsTemplate(student, definitives, institution);
  }

  async getNumericAlphabeticAll(dto: GenerateDeliverableDto): Promise<string> {
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_year, id_student } = dto;
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
            achievements: true,
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
    return gradeWithAchievementsTemplate(student, definitives, institution);
  }

  async getNumericAlphabeticMarked(
    dto: GenerateDeliverableDto,
  ): Promise<string> {
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_year, id_student } = dto;
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
            achievements: true,
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
    return gradeWithAchievementsTemplate(student, definitives, institution);
  }

  async getConfigurableReports(
    dto: GenerateDeliverableDto,
    reportOptionsDto?: ReportDictionary,
  ): Promise<string> {
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_group, id_student } = dto;
    console.log(id_group, "grupo")
    const group = await prisma.group.findUnique({
      where: { id_group: id_group },
    });
   const definitives = await this.getStudentDefinitives(id_student, id_group);
   console.log(definitives)
    return configurableReportsTemplate(group, definitives, reportOptionsDto, institution);
  }

  async getStudentCertificate(
    certifiedStudentReportDto: CertifiedStudentReportDto,
    report_options?: CertifiedStudentDictionary,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const { id_student, id_group } = certifiedStudentReportDto;
    const student = await prisma.student.findUnique({
      where: { id_student: id_student },
      select: {
        name: true,
        last_name: true,
        identification: true,
        type_id: true,
      },
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
        score5: true,
        course: {
          select: {
            name: true,
            hour: true,
          },
        },
      },
    });
    student['definitives'] = definitives;
    console.log(institution);
    const mockData = [];
    return certifiedStudentTemplate(
      student,
      definitives,
      report_options,
      institution,
    );
  }

  async getStudentIdCard(dto: GenerateDeliverableDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const mockData = [];
    return studentIdCardTemplate(mockData, mockInstitution);
  }
}
