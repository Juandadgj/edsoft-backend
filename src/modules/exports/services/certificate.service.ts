import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { enrollmentII } from 'src/templates/enrollment/enrollmentII';
import { erollmentI } from 'src/templates/enrollment/erollmentI';
import { certifiedStudentTemplate } from 'src/templates/spreadsheet/certified-student';
import { CertifiedStudentDictionary, CertifiedStudentReportDto, StudentEnrollmentReportDto } from '../dto/certificate.dto';

@Injectable()
export class CertificateService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async StudentEnrollmentReportI(
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    try {
      const { id_student, id_year } = StudentEnrollmentReportDto;
      const prisma = this.prismaManager.getClient('1059');
      const tenant = this.prismaManager.getClient('edsoft_institutions');
      const institution = await tenant.institution.findFirst({
        where: { id_institution: 1059 },
      });
      const student = await prisma.student.findUnique({
        where: { id_student: id_student },
      });
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          id_student: id_student,
          year: id_year,
        },
        include: {
          group: {
            select: {
              level: true,
            },
          },
        },
      });
      console.log(enrollment)
      return {
        report_content: erollmentI({
          student: student,
          level: enrollment?.group?.level,
          institution: institution,
          year: id_year,
          id_enrollment: enrollment?.id_enrollment,
        }),
      }
    } catch (error) {
      console.log(error);
    }
  }
  async StudentEnrollmentReportII(
    StudentEnrollmentReportDto: StudentEnrollmentReportDto,
  ) {
    try {
      const { id_student } = StudentEnrollmentReportDto;
      const prisma = this.prismaManager.getClient('1059');
      const student = await prisma.student.findUnique({
        where: { id_student: id_student },
      });
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          id_student: id_student,
        },
        include: {
          group: {
            select: {
              level: true,
            },
          },
        },
      });
      return {
        report_content: enrollmentII({...student, level: enrollment.group.level}),
      }
    } catch (error) {
      console.log(error);
    }
  }
  async CertifiedStudentReport(
    certifiedStudentReportDto: CertifiedStudentReportDto,
    report_options?: CertifiedStudentDictionary,
  ) {
    try {
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
      console.log(institution)
      return {
        report_content: certifiedStudentTemplate(
          student,
          definitives,
          report_options,
          institution,
        ),
      };
    } catch (error) {
      console.log(error);
    }
  }
}
