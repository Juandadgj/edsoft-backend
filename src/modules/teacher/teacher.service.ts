import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateTeacherInput,
  FilterTeacherInput,
  UpdateTeacherInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class TeacherService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createTeacherInput: CreateTeacherInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.create({
      data: createTeacherInput,
    });
  }

  async findAll(
    id_institution: string,
    filterTeacherInput: FilterTeacherInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.findMany({
      where: filterTeacherInput,
    });
  }

  async findOne(id_institution: string, id_teacher: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.findUnique({
      where: { id_teacher: id_teacher },
    });
  }

  async update(id_institution: string, updateTeacherInput: UpdateTeacherInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.update({
      where: { id_teacher: updateTeacherInput.id_teacher },
      data: updateTeacherInput,
    });
  }

  async delete(id_institution: string, id_teacher: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.teacher.delete({
      where: { id_teacher: id_teacher },
    });
  }
}
