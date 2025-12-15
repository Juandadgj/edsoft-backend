import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateAbsenceInput,
  FilterAbsenceInput,
  UpdateAbsenceInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class AbsenceService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createAbsenceInput: CreateAbsenceInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.create({
      data: createAbsenceInput,
    });
  }

  async findAll(
    id_institution: string,
    filterAbsenceInput: FilterAbsenceInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.findMany({
      where: filterAbsenceInput,
    });
  }

  async update(id_institution: string, updateAbsenceInput: UpdateAbsenceInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.update({
      where: { id_absence: updateAbsenceInput.id_absence },
      data: updateAbsenceInput,
    });
  }

  async delete(id_institution: string, id_absence: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.delete({
      where: { id_absence: id_absence },
    });
  }
}
