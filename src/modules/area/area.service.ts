import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateAreaInput,
  FilterAreaInput,
  UpdateAreaInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class AreaService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createAreaInput: CreateAreaInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.create({ data: createAreaInput });
  }

  async findAll(id_institution: string, filterAreaInput: FilterAreaInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.findMany({
      where: filterAreaInput,
    });
  }

  async update(id_institution: string, updateAreaInput: UpdateAreaInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.update({
      where: { id_area: updateAreaInput.id_area },
      data: updateAreaInput,
    });
  }

  async delete(id_institution: string, id_area: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.area.delete({
      where: { id_area: id_area },
    });
  }
}
