import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import { CreateTypeQualificationInput } from 'src/shared/interfaces/graphql';

@Injectable()
export class TypeQualificationService {
  async create(
    id_institution: string,
    createTypeQualificationInput: CreateTypeQualificationInput,
  ) {
    return await clients[id_institution].type_qualification.create({
      data: createTypeQualificationInput,
    });
  }

  async findAll(id_institution: string) {
    return await clients[id_institution].type_qualification.findMany();
  }

  async delete(id_institution: string, id_type_qual: number) {
    return await clients[id_institution].type_qualification.delete({
      where: { id_type_qual: id_type_qual },
    });
  }
}
