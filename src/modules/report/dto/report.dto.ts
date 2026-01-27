import { IsInt, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class SignatureInput {
  @IsBoolean()
  @IsOptional()
  professor_group?: boolean;

  @IsBoolean()
  @IsOptional()
  secretary?: boolean;

  @IsBoolean()
  @IsOptional()
  rector?: boolean;
}

export class ReportDictionary {
  @Type(() => SignatureInput)
  signature: SignatureInput;

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
}

export class GenerateStudentsListUndeterminatedDto {
  @IsInt()
  id_group: number;
}

export class GenerateStudentsListDeterminatedDto {
  @IsInt()
  id_course: number;

  @IsInt()
  id_group: number;
}

export class GenerateAchievementsAndIndicatorsDto {
  @IsInt()
  id_group: number;

  @IsInt()
  id_course: number;

  @IsInt()
  period: number;
}

export class GenerateReportAreaDto {
  @IsInt()
  id_group: number;

  @IsInt()
  @IsOptional()
  id_student?: number;

  @Type(() => ReportDictionary)
  report_options: ReportDictionary;
}

export class GenerateStudentEnrollmentReportDto {
  @IsInt()
  id_student: number;

  @IsInt()
  id_year: number;
}

export class CertifiedStudentDictionary extends ReportDictionary {
  @IsOptional()
  gradeDisplayConfig?: string;
}

export class CertifiedStudentReportDto {
  @IsInt()
  id_student: number;

  @Type(() => CertifiedStudentDictionary)
  @IsOptional()
  report_options?: CertifiedStudentDictionary;
}
