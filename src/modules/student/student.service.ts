import { Injectable } from '@nestjs/common';
import {
  CreateStudentInput,
  UpdateStudentInput,
  FilterStudentInput,
} from 'src/shared/interfaces/graphql';
import clients from 'src/config/clientsDB';

@Injectable()
export class StudentService {
  async create(
    id_institution: string,
    createStudentInput: CreateStudentInput,
    id_group: number,
  ) {
    const group = await clients[id_institution].group.findUnique({
      where: { id_group },
    });
    const student = await clients[id_institution].student.create({
      data: createStudentInput,
    });
    await clients[id_institution].enrollment.create({
      data: {
        id_student: student.id_student,
        id_group: group.id_group,
        year: group.id_year,
      },
    });
    await clients[id_institution].user.create({
      data: {
        user: `e${student.identification}`,
        password: '1234',
        typeu: 4,
        status: 'Active',
        belongs: String(student.id_student),
      },
    });
    return student;
  }

  async findByGroup(
    id_institution: string,
    id_group: number,
  ) {
    const enrollment = await clients[id_institution].enrollment.findMany({
      where: { id_group: id_group },
      include: { student: true },
    });
    const students = enrollment.map((element) => element.student);
    return students;
  }

  async findOne(id_institution: string, id_student: number) {
    // id_student: 1591
    // group: 244
    const student = await clients[id_institution].student.findUnique({
      where: { id_student: id_student },
      select: {
        id_student: true,
        name: true,
        last_name: true,
        identification: true,
        guardian: true,
        direction: true,
        phone:  true,
      }
    });
    const enrollments = await clients[id_institution].enrollment.findMany({
      where: { id_student: student.id_student },
      select: { id_group: true },
    });
    const ids_group = enrollments.map((enrollment) => enrollment.id_group);
    const groups = await clients[id_institution].group.findMany({
      where: { id_group: { in: ids_group } },
      select: { id_group: true, level: true, sublevel: true },
    });
    let courses: any = await clients[id_institution].course.findMany({
      where: { id_group: { in: ids_group } },
      select: {
        id_course: true,
        id_group: true,
        name: true,
        teacher: { select: { name: true, last_name: true } },
      },
    });
    courses = courses.map((course) => {
      course['teacher'] = `${course.teacher.name} ${course.teacher.last_name}`
      return course;
    })
    const ids_course = courses.map((course) => course.id_course);
    const definitives = await clients[id_institution].course_student.findMany({
      where: {
        id_student: student.id_student,
        id_course: { in: ids_course },
      },
      select: {
        id_course: true,
        id_student: true,
        score1: true,
        score2: true,
        score3: true,
        score4: true,
      },
    });
    student['groups'] = groups.map((group) => {
      group['courses'] = courses.filter(
        (course) => course.id_group == group.id_group,
      );
      group['courses'] = group['courses'].map((course) => {
        course['definitives'] = definitives.find(
          (definitive) => definitive.id_course == course.id_course,
        );
        return course;
      });
      return group;
    });
    return student;
  }

  async update(id_institution: string, updateStudentInput: UpdateStudentInput) {
    return await clients[id_institution].student.update({
      where: { id_student: updateStudentInput.id_student },
      data: updateStudentInput,
    });
  }

  async delete(id_institution: string, id_student: number) {
    return await clients[id_institution].student.delete({
      where: { id_student: id_student },
    });
  }
}
