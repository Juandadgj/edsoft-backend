import { Injectable } from '@nestjs/common';
import {
  CreateStudentInput,
  UpdateStudentInput,
  FilterStudentInput,
} from 'src/shared/interfaces/graphql';
import clients from 'src/config/clientsDB';

@Injectable()
export class StudentService {
  async create(id_institution: string, createStudentInput: CreateStudentInput) {
    return await clients[id_institution].student.create({data: createStudentInput})
  }

  async findAll(
    id_institution: string,
    filterStudentInput: FilterStudentInput,
  ) {
    return await clients[id_institution].student.findMany({
      where: filterStudentInput,
    });
  }

  async findOne(id_institution: string, id_student: number) {
    return await clients[id_institution].student.findUnique({where: {id_student: id_student}})
  }

  async update(
    id_institution: string,
    updateStudentInput: UpdateStudentInput,
  ) {
    return await clients[id_institution].student.update({
      where: { id_student: updateStudentInput.id_student },
      data: updateStudentInput,
    })
  }

  async delete(id_institution: string, id_student: number) {
    return await clients[id_institution].student.delete({where: {id_student: id_student}})
  }
}
