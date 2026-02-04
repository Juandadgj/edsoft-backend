import {
  IsInt,
  IsOptional,
  IsBoolean,
  IsIn,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReportDictionary {
  @IsBoolean()
  @IsOptional()
  showRectorSignature?: boolean;

  @IsBoolean()
  @IsOptional()
  showSecretarySignature?: boolean;

  @IsBoolean()
  @IsOptional()
  showGroupProfessorSignature?: boolean;

  @IsBoolean()
  @IsOptional()
  average_general?: boolean;

  @IsBoolean()
  @IsOptional()
  average_group?: boolean;

  @IsBoolean()
  @IsOptional()
  average_area?: boolean;

  @IsBoolean()
  @IsOptional()
  position?: boolean;

  @IsBoolean()
  @IsOptional()
  username?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per1?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per2?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per3?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per4?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per5?: boolean;

  @IsBoolean()
  @IsOptional()
  average_per?: boolean;

  @IsBoolean()
  @IsOptional()
  all_qualifications?: boolean;

  @IsBoolean()
  @IsOptional()
  professor_course?: boolean;

  @IsBoolean()
  @IsOptional()
  hour?: boolean;

  @IsBoolean()
  @IsOptional()
  absences?: boolean;

  @IsBoolean()
  @IsOptional()
  showLogo?: boolean;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  headerTitleSize?: number;

  @IsBoolean()
  @IsOptional()
  showHeaderSubtitle?: boolean;
}

export class GenerateStudentsListUndeterminatedDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;
}

export class GenerateStudentsListDeterminatedDto {
  @Type(() => Number)
  @IsInt()
  id_course: number;

  @Type(() => Number)
  @IsInt()
  id_group: number;
}

export class GenerateAchievementsAndIndicatorsDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;

  @Type(() => Number)
  @IsInt()
  id_course: number;

  @Type(() => Number)
  @IsInt()
  period: number;
}

export class GenerateReportAreaDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;
}

export class GenerateStudentEnrollmentReportDto {
  @Type(() => Number)
  @IsInt()
  id_student: number;

  @Type(() => Number)
  @IsInt()
  id_year: number;
}

export class CertifiedStudentDictionary extends ReportDictionary {
  @IsOptional()
  gradeDisplayConfig?: string;
}

export class CertifiedStudentReportDto {
  @Type(() => Number)
  @IsInt()
  id_student: number;

  @Type(() => Number)
  @IsInt()
  id_group: number;
}

export class GenerateDeliverableDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_course?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  period?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_year?: number;
}

export class StudentEnrollmentReportDto {
  @Type(() => Number)
  @IsInt()
  id_student: number;

  @Type(() => Number)
  @IsInt()
  id_year: number;
}
