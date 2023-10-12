import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateAbsenceInput,
  FilterAbsenceInput,
  UpdateAbsenceInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class AbsenceService {
  async create(id_institution: string, createAbsenceInput: CreateAbsenceInput) {
    return await clients[id_institution].absence.create({
      data: createAbsenceInput,
    });
  }

  async findAll(
    id_institution: string,
    filterAbsenceInput: FilterAbsenceInput,
  ) {
    return await clients[id_institution].absence.findMany({
      where: filterAbsenceInput,
    });
  }

  async update(id_institution: string, updateAbsenceInput: UpdateAbsenceInput) {
    return await clients[id_institution].absence.update({
      where: { id_absence: updateAbsenceInput.id_absence },
      data: updateAbsenceInput,
    });
  }

  async delete(id_institution: string, id_absence: number) {
    return await clients[id_institution].absence.delete({
      where: { id_absence: id_absence },
    });
  }
}
