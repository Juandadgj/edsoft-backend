import { IsInt, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { ReportDictionary } from './report.dto';

export class StudentEnrollmentReportDto {
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
