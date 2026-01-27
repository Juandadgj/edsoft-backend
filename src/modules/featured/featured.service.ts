import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateFeaturedDto } from './dto/create-featured.dto';
import { FilterFeaturedDto } from './dto/filter-featured.dto';

@Injectable()
export class FeaturedService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createFeaturedDto: CreateFeaturedDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.create({ data: createFeaturedDto });
  }

  async findAll(
    id_institution: string,
    filterFeaturedDto: FilterFeaturedDto,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.findMany({ where: filterFeaturedDto });
  }

  async delete(id_institution: string, id_featured: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.delete({ where: { id_featured: id_featured } });
  }
}
