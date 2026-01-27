import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateAreaDto } from './dto/create-area.dto';
import { FilterAreaDto } from './dto/filter-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createAreaDto: CreateAreaDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.create({ data: createAreaDto });
  }

  async findAll(id_institution: string, filterAreaDto: FilterAreaDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.findMany({
      where: filterAreaDto,
    });
  }

  async update(id_institution: string, updateAreaDto: UpdateAreaDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.update({
      where: { id_area: updateAreaDto.id_area },
      data: updateAreaDto,
    });
  }

  async delete(id_institution: string, id_area: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.delete({
      where: { id_area: id_area },
    });
  }
}
