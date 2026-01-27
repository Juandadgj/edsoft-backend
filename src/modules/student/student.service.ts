import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { PrismaClientManager } from 'src/config/prisma-client.manager';

@Injectable()
export class StudentService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async create(
    id_institution: string,
    createStudentInput: Omit<CreateStudentDto, 'id_group'>,
    id_group: number,
  ) {
    const prisma = this.prismaManager.getClient(id_institution);
    const group = await prisma.group.findUnique({
      where: { id_group },
    });
    const student = await prisma.student.create({
      data: createStudentInput,
    });
    await prisma.enrollment.create({
      data: {
        id_student: student.id_student,
        id_group: group.id_group,
        year: group.id_year,
      },
    });
    await prisma.user.create({
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

  async findByGroup(id_institution: string, id_group: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    const enrollment = await prisma.enrollment.findMany({
      where: { id_group: id_group },
      include: { student: true },
    });
    const students = enrollment.map((element) => element.student);
    return students;
  }

  async find(id_institution: string, filterStudentInput: FilterStudentDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    const student = await prisma.student.findMany({
      where: {
        OR: [
          {
            OR: [
              {
                name: {
                  contains: filterStudentInput.name || 'NULL',
                },
              },
              {
                last_name: {
                  contains: filterStudentInput.name || 'NULL',
                },
              },
            ],
          },
          {
            identification: {
              contains: filterStudentInput.identification || 'NULL',
            },
          },
        ],
      },
    });
    //const sebas = await clients['1059'].$queryRaw`
    //  SELECT * FROM student WHERE CONCAT(name, ' ', last_name) LIKE '%${filterStudentInput.name}%'
    //`;
    //console.log(sebas);
    return student;
  }

  async findOne(id_institution: string, id_student: number) {
    // id_student: 1591
    // group: 244
    const prisma = this.prismaManager.getClient(id_institution);
    const student = await prisma.student.findUnique({
      where: { id_student: id_student },
      select: {
        id_student: true,
        name: true,
        last_name: true,
        identification: true,
        guardian: true,
        direction: true,
        phone: true,
      },
    });
    const enrollments = await prisma.enrollment.findMany({
      where: { id_student: student.id_student },
      select: { id_group: true },
    });
    const ids_group = enrollments.map((enrollment) => enrollment.id_group);
    const groups = await prisma.group.findMany({
      where: { id_group: { in: ids_group } },
      select: { id_group: true, level: true, sublevel: true },
    });
    let courses: any = await prisma.course.findMany({
      where: { id_group: { in: ids_group } },
      select: {
        id_course: true,
        id_group: true,
        name: true,
        teacher: { select: { name: true, last_name: true } },
      },
    });
    courses = courses.map((course) => {
      course['teacher'] = `${course.teacher.name} ${course.teacher.last_name}`;
      return course;
    });
    const ids_course = courses.map((course) => course.id_course);
    const definitives = await prisma.course_student.findMany({
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

  async update(id_institution: string, updateStudentInput: UpdateStudentDto) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.student.update({
      where: { id_student: updateStudentInput.id_student },
      data: updateStudentInput,
    });
  }

  async delete(id_institution: string, id_student: number) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.student.delete({
      where: { id_student: id_student },
    });
  }
}
