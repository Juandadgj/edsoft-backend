import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { FilterEnrollmentDto } from './dto/filter-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { StudentEnrollmentReportDto } from '../exports/dto/deliverable.dto';
import { erollmentI } from 'src/templates/enrollment/erollmentI';
import { enrollmentII } from 'src/templates/enrollment/enrollmentII';

@Injectable()
export class EnrollmentService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createEnrollmentDto: CreateEnrollmentDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.create({
      data: createEnrollmentDto,
    });
  }

  async findAll(
    id_institution: string,
    filterEnrollmentDto: FilterEnrollmentDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.findMany({
      where: filterEnrollmentDto,
    });
  }

  async findOne(id_institution: string, id_enrollment: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.findUnique({
      where: { id_enrollment: id_enrollment },
    });
  }

  async update(
    id_institution: string,
    updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.update({
      where: { id_enrollment: updateEnrollmentDto.id_enrollment },
      data: updateEnrollmentDto,
    });
  }

  async delete(id_institution: string, id_enrollment: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.delete({
      where: { id_enrollment: id_enrollment },
    });
  }

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
}
