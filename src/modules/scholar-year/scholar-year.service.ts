import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateScholarYearDto } from './dto/create-scholar-year.dto';
import { UpdateScholarYearDto } from './dto/update-scholar-year.dto';

@Injectable()
export class ScholarYearService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createScholarYearDto: CreateScholarYearDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.scholar_year.create({
      data: createScholarYearDto,
    });
  }

  async findAll(id_institution: string) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.scholar_year.findMany();
  }

  async findSelected(id_institution: string) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.scholar_year.findFirst({
      where: {
        selected: true,
      },
    });
  }

  async update(
    id_institution: string,
    updateScholarYearDto: UpdateScholarYearDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.scholar_year.update({
      where: { id_year: updateScholarYearDto.id_year },
      data: updateScholarYearDto,
    });
  }

  async delete(id_institution: string, id_year: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.scholar_year.delete({
      where: { id_year: id_year },
    });
  }

  async select(id_institution: string, id_year: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    await prisma.scholar_year.updateMany({
      where: {
        selected: true,
      },
      data: {
        selected: false,
      },
    });
    return await prisma.scholar_year.update({
      where: {
        id_year,
      },
      data: {
        selected: true,
      },
    });
  }
}
