import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateCourseDto } from './dto/create-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';
import { FilterDefinitivesDto, UpdateDefinitivesDto } from './dto/definitives.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createCourseDto: CreateCourseDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.create({
      data: createCourseDto,
    });
  }

  async findAll(id_institution: string, filterCourseDto: FilterCourseDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.findMany({
      where: filterCourseDto,
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

  async update(id_institution: string, updateCourseDto: UpdateCourseDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course.update({
      where: { id_course: updateCourseDto.id_course },
      data: updateCourseDto,
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
    filterDefinitivesDto: FilterDefinitivesDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course_student.findMany({
      where: filterDefinitivesDto,
    });
  }

  async updateDefinitives(
    id_institution: string,
    updateDefinitivesDto: UpdateDefinitivesDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.course_student.update({
      where: { id_cour_stu: updateDefinitivesDto.id_cour_stu },
      data: updateDefinitivesDto,
    });
  }
}
