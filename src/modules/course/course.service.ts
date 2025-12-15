import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateCourseInput,
  FilterCourseInput,
  FilterDefinitivesInput,
  UpdateCourseInput,
  UpdateDefinitivesInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class CourseService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createCourseInput: CreateCourseInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.create({
      data: createCourseInput,
    });
  }

  async findAll(id_institution: string, filterCourseInput: FilterCourseInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.findMany({
      where: filterCourseInput,
      include: {
        teacher: true,
        area: true,
        group: true,
      },
    });
  }

  async findOne(id_institution: string, id_course: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.findUnique({
      where: { id_course: id_course },
    });
  }

  async update(id_institution: string, updateCourseInput: UpdateCourseInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.update({
      where: { id_course: updateCourseInput.id_course },
      data: updateCourseInput,
    });
  }

  async delete(id_institution: string, id_course: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.delete({
      where: { id_course: id_course },
    });
  }

  async findDefinitives(
    id_institution: string,
    filterDefinitivesInput: FilterDefinitivesInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course_student.findMany({
      where: filterDefinitivesInput,
    });
  }

  async updateDefinitives(
    id_institution: string,
    updateDefinitivesInput: UpdateDefinitivesInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course_student.update({
      where: { id_cour_stu: updateDefinitivesInput.id_cour_stu },
      data: updateDefinitivesInput,
    });
  }
}
