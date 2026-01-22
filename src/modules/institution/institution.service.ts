import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import { AwsService } from '../aws/aws.service';

@Injectable()
export class InstitutionService {
  constructor(
    private readonly prismaManager: PrismaClientManager,
    private readonly awsService: AwsService,
  ) {}

  async findAll() {
    const prisma = this.prismaManager.getClient('institutions');
    return await prisma.institution.findMany();
  }

  async update(id: string, updateInstitutionDto: any) {
    const prisma = this.prismaManager.getClient('institutions');
    const { logo, ...data } = updateInstitutionDto;

    let logoUrl: string | undefined;
    if (logo) {
      logoUrl = await this.awsService.uploadFile(logo, `institutions/${id}/logo`);
    }

    return await prisma.institution.update({
      where: { id_institution: parseInt(id) },
      data: {
        ...data,
        ...(logoUrl && { logo: logoUrl }),
      },
    });
  }
}
