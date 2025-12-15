import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  CreateGroupInput,
  FilterGroupInput,
  UpdateGroupInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class GroupService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createGroupInput: CreateGroupInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.create({
      data: createGroupInput,
    });
  }

  async findAll(id_institution: string, filterGroupInput: FilterGroupInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    const query = await prisma.group.findMany({
      where: filterGroupInput,
      include: {
        _count: {
          select: { courses: true },
        },
      },
    });
    const groups = query.map((group: any) => {
      group.coursesCount = group._count.courses;
      return group;
    });
    return groups;
  }

  async findOne(id_institution: string, id_group: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.findUnique({
      where: { id_group: id_group },
    });
  }

  async update(id_institution: string, updateGroupInput: UpdateGroupInput) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.update({
      where: { id_group: updateGroupInput.id_group },
      data: updateGroupInput,
    });
  }

  async delete(id_institution: string, id_group: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.delete({
      where: { id_group: id_group },
    });
  }
}
