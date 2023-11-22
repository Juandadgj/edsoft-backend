import { Injectable } from '@nestjs/common';
import clients from 'src/config/clientsDB';
import {
  CreateCourseInput,
  FilterCourseInput,
  FilterDefinitivesInput,
  UpdateCourseInput,
  UpdateDefinitivesInput,
} from 'src/shared/interfaces/graphql';

@Injectable()
export class CourseService {
  async create(id_institution: string, createCourseInput: CreateCourseInput) {
    return await clients[id_institution].course.create({
      data: createCourseInput,
    });
  }

  async findAll(id_institution: string, filterCourseInput: FilterCourseInput) {
    return await clients[id_institution].course.findMany({
      where: filterCourseInput,
      include: {
        teacher: true,
        area: true,
        group: true
      },
    });
  }

  async findOne(id_institution: string, id_course: number) {
    return await clients[id_institution].course.findUnique({
      where: { id_course: id_course },
    });
  }

  async update(id_institution: string, updateCourseInput: UpdateCourseInput) {
    return await clients[id_institution].course.update({
      where: { id_course: updateCourseInput.id_course },
      data: updateCourseInput,
    });
  }

  async delete(id_institution: string, id_course: number) {
    return await clients[id_institution].course.delete({
      where: { id_course: id_course },
    });
  }

  async findDefinitives(
    id_institution: string,
    filterDefinitivesInput: FilterDefinitivesInput,
  ) {
    return await clients[id_institution].course_student.findMany({
      where: filterDefinitivesInput,
    });
  }

  async updateDefitinives(
    id_institution: string,
    updateDefinitivesInput: UpdateDefinitivesInput,
  ) {
    return await clients[id_institution].course_student.update({
      where: { id_cour_stu: updateDefinitivesInput.id_cour_stu },
      data: updateDefinitivesInput,
    });
  }
}
