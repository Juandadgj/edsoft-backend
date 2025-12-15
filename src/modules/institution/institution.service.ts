import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';

@Injectable()
export class InstitutionService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async findAll() {
    const prisma = this.prismaManager.getClient('institutions');
    return await prisma.institution.findMany();
  }
}
