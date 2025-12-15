import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { CreateTypeQualificationInput } from 'src/shared/interfaces/graphql';

@Injectable()
export class TypeQualificationService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createTypeQualificationInput: CreateTypeQualificationInput,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.type_qualification.create({
      data: createTypeQualificationInput,
    });
  }

  async findAll(id_institution: string) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.type_qualification.findMany();
  }

  async delete(id_institution: string, id_type_qual: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.type_qualification.delete({
      where: { id_type_qual: id_type_qual },
    });
  }
}
