import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateGroupDto } from './dto/create-group.dto';
import { FilterGroupDto } from './dto/filter-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(id_institution: string, createGroupDto: CreateGroupDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.create({
      data: createGroupDto,
    });
  }

  async findAll(id_institution: string, filterGroupDto: FilterGroupDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    const query = await prisma.group.findMany({
      where: filterGroupDto,
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

  async update(id_institution: string, updateGroupDto: UpdateGroupDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.update({
      where: { id_group: updateGroupDto.id_group },
      data: updateGroupDto,
    });
  }

  async delete(id_institution: string, id_group: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.group.delete({
      where: { id_group: id_group },
    });
  }
}
