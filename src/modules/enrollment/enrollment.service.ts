import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { FilterEnrollmentDto } from './dto/filter-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

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
}
