import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateFeaturedInput,
  FilterFeaturedInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class FeaturedService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createFeaturedInput: CreateFeaturedInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.create({ data: createFeaturedInput });
  }

  async findAll(
    id_institution: string,
    filterFeaturedInput: FilterFeaturedInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.findMany({ where: filterFeaturedInput });
  }

  async delete(id_institution: string, id_featured: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.featured.delete({ where: { id_featured: id_featured } });
  }
}
