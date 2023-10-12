import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateTeacherInput,
  FilterTeacherInput,
  UpdateTeacherInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class TeacherService {
  async create(id_institution: string, createTeacherInput: CreateTeacherInput) {
    return await clients[id_institution].teacher.create({
      data: createTeacherInput,
    });
  }

  async findAll(
    id_institution: string,
    filterTeacherInput: FilterTeacherInput,
  ) {
    return await clients[id_institution].teacher.findMany({
      where: filterTeacherInput,
    });
  }

  async findOne(id_institution: string, id_teacher: number) {
    return await clients[id_institution].teacher.findUnique({
      where: { id_teacher: id_teacher },
    });
  }

  async update(id_institution: string, updateTeacherInput: UpdateTeacherInput) {
    return await clients[id_institution].teacher.update({
      where: { id_teacher: updateTeacherInput.id_teacher },
      data: updateTeacherInput,
    });
  }

  async delete(id_institution: string, id_teacher: number) {
    return await clients[id_institution].teacher.delete({
      where: { id_teacher: id_teacher },
    });
  }
}
