import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { FilterTeacherDto } from './dto/filter-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createTeacherDto: CreateTeacherDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.create({
      data: createTeacherDto,
    });
  }

  async findAll(
    id_institution: string,
    filterTeacherDto: FilterTeacherDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.findMany({
      where: filterTeacherDto,
    });
  }

  async findOne(id_institution: string, id_teacher: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.findUnique({
      where: { id_teacher: id_teacher },
    });
  }

  async update(id_institution: string, updateTeacherDto: UpdateTeacherDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.update({
      where: { id_teacher: updateTeacherDto.id_teacher },
      data: updateTeacherDto,
    });
  }

  async delete(id_institution: string, id_teacher: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.delete({
      where: { id_teacher: id_teacher },
    });
  }
}
