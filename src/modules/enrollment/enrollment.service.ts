import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateEnrollmentInput,
  FilterEnrollmentInput,
  UpdateEnrollmentInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class EnrollmentService {
  async create(
    id_institution: string,
    createEnrollmentInput: CreateEnrollmentInput,
  ) {
    return await clients[id_institution].enrollment.create({
      data: createEnrollmentInput,
    });
  }

  async findAll(
    id_institution: string,
    filterEnrollmentInput: FilterEnrollmentInput,
  ) {
    return await clients[id_institution].enrollment.findMany({
      where: filterEnrollmentInput,
    });
  }

  async findOne(id_institution: string, id_enrollment: number) {
    return await clients[id_institution].enrollment.findUnique({
      where: { id_enrollment: id_enrollment },
    });
  }

  async update(
    id_institution: string,
    updateEnrollmentInput: UpdateEnrollmentInput,
  ) {
    return await clients[id_institution].enrollment.update({
      where: { id_enrollment: updateEnrollmentInput.id_enrollment },
      data: updateEnrollmentInput,
    });
  }

  async delete(id_institution: string, id_enrollment: number) {
    return await clients[id_institution].enrollment.delete({
      where: { id_enrollment: id_enrollment },
    });
  }
}
