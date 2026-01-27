import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { FilterAbsenceDto } from './dto/filter-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';

@Injectable()
export class AbsenceService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createAbsenceDto: CreateAbsenceDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.create({
      data: createAbsenceDto,
    });
  }

  async findAll(
    id_institution: string,
    filterAbsenceDto: FilterAbsenceDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.findMany({
      where: filterAbsenceDto,
    });
  }

  async update(id_institution: string, updateAbsenceDto: UpdateAbsenceDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.update({
      where: { id_absence: updateAbsenceDto.id_absence },
      data: updateAbsenceDto,
    });
  }

  async delete(id_institution: string, id_absence: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.absence.delete({
      where: { id_absence: id_absence },
    });
  }
}
