import { Injectable } from '@nestjs/common';
import { PrismaClientManager } from 'src/config/prisma-client.manager';
import {
  qualifiedTeachersTemplate,
  studentsByCourseTemplate,
  studentsByCoursSignatureTemplate,
  subjectsByCourseTemplate,
  achievementsByCourseTemplate,
  globalNotesSheetByCourseTemplate,
  globalNotesSheetByCourseExcelTemplate,
  globalNotesSheetAreasByCourseExcelTemplate,
  lostGlobalNotesSheetByCourseExcelTemplate,
  allGlobalNotesSheetByCourseExcelTemplate,
  minimumNotesCalculationByPeriodExcelTemplate,
  coursesTemplate,
  graduatesTemplate,
  studentsConfigurableFieldsExcelTemplate,
  studentsListExcelTemplate,
  agesByCourseTemplate,
} from 'src/templates/lists';
import { GenerateListDto } from '../dto/list.dto';

const INSTITUTION_ID = 1059;

// Mock institution data
const mockInstitution = {
  id: INSTITUTION_ID,
  name: 'Institución Educativa',
  address: '',
  phone: '',
  email: '',
};

@Injectable()
export class ListsService {
  constructor(private readonly prismaManager: PrismaClientManager) {}

  async getQualifiedTeachers(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockTeachers = [];
    return qualifiedTeachersTemplate(mockTeachers, institution);
  }

  async getStudentsByCourse(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockStudents = [];
    return studentsByCourseTemplate(mockStudents, institution);
  }

  async getStudentsByCourseSignature(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockStudents = [];
    return studentsByCoursSignatureTemplate(mockStudents, institution);
  }

  async getSubjectsByCourse(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockSubjects = [];
    return subjectsByCourseTemplate(mockSubjects, institution);
  }

  async getAchievementsByCourse(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockAchievements = [];
    return achievementsByCourseTemplate(mockAchievements, institution);
  }

  async getGlobalNotesSheetByCourse(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockNotes = [];
    return globalNotesSheetByCourseTemplate(mockNotes, institution);
  }

  async getGlobalNotesSheetByCourseExcel(
    dto: GenerateListDto,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockNotes = [];
    return globalNotesSheetByCourseExcelTemplate(mockNotes, institution);
  }

  async getGlobalNotesSheetAreasByCourseExcel(
    dto: GenerateListDto,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockNotes = [];
    return globalNotesSheetAreasByCourseExcelTemplate(mockNotes, institution);
  }

  async getLostGlobalNotesSheetByCourseExcel(
    dto: GenerateListDto,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockNotes = [];
    return lostGlobalNotesSheetByCourseExcelTemplate(mockNotes, institution);
  }

  async getAllGlobalNotesSheetByCourseExcel(
    dto: GenerateListDto,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockNotes = [];
    return allGlobalNotesSheetByCourseExcelTemplate(mockNotes, institution);
  }

  async getMinimumNotesCalculationByPeriodExcel(
    dto: GenerateListDto,
  ): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockSubjects = [];
    return minimumNotesCalculationByPeriodExcelTemplate(
      mockSubjects,
      institution,
    );
  }

  async getCourses(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockCourses = [];
    return coursesTemplate(mockCourses, institution);
  }

  async getGraduates(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockGraduates = [];
    return graduatesTemplate(mockGraduates, institution);
  }

  async getStudentsConfigurableFields(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockStudents = [];
    const fields = dto.fields || [
      'Nombre',
      'Identificación',
      'Email',
      'Teléfono',
    ];
    return studentsConfigurableFieldsExcelTemplate(
      mockStudents,
      institution,
      fields,
    );
  }

  async getStudentsListExcel(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockStudents = [];
    return studentsListExcelTemplate(mockStudents, institution);
  }

  async getAgesByCourse(dto: GenerateListDto): Promise<string> {
    // TODO: Implement actual query when backend structure is defined
    const prisma = this.prismaManager.getClient('1059');
    const tenant = this.prismaManager.getClient('edsoft_institutions');
    const institution = await tenant.institution.findFirst({
      where: { id_institution: 1059 },
    });
    const mockStudents = [];
    return agesByCourseTemplate(mockStudents, institution);
  }
}
