import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateEnrollmentInput,
  FilterEnrollmentInput,
  UpdateEnrollmentInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class EnrollmentService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createEnrollmentInput: CreateEnrollmentInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.create({
      data: createEnrollmentInput,
    });
  }

  async findAll(
    id_institution: string,
    filterEnrollmentInput: FilterEnrollmentInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.findMany({
      where: filterEnrollmentInput,
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
    updateEnrollmentInput: UpdateEnrollmentInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.update({
      where: { id_enrollment: updateEnrollmentInput.id_enrollment },
      data: updateEnrollmentInput,
    });
  }

  async delete(id_institution: string, id_enrollment: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.enrollment.delete({
      where: { id_enrollment: id_enrollment },
    });
  }
}
