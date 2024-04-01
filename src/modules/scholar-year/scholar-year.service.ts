import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateScholarYearInput,
  UpdateScholarYearInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class ScholarYearService {
  async create(
    id_institution: string,
    createScholarYearInput: CreateScholarYearInput,
  ) {
    return await clients[id_institution].scholar_year.create({
      data: createScholarYearInput,
    });
  }

  async findAll(id_institution: string) {
    return await clients[id_institution].scholar_year.findMany();
  }

  async findSelected(id_institution: string) {
    return await clients[id_institution].scholar_year.findFirst({
      where: {
        selected: true,
      },
    });
  }

  async update(
    id_institution: string,
    updateScholarYearInput: UpdateScholarYearInput,
  ) {
    return await clients[id_institution].scholar_year.update({
      where: { id_year: updateScholarYearInput.id_year },
      data: updateScholarYearInput,
    });
  }

  async delete(id_institution: string, id_year: number) {
    return await clients[id_institution].scholar_year.delete({
      where: { id_year: id_year },
    });
  }

  async select(id_institution: string, id_year: number) {
    await clients[id_institution].scholar_year.updateMany({
      where: { selected: true },
      data: { selected: false },
    });
    return await clients[id_institution].scholar_year.update({
      where: { id_year },
      data: { selected: true },
    });
  }
}
