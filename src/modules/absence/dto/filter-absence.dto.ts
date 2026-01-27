import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterAbsenceDto {
  @IsInt()
  @IsOptional()
  id_student?: number;

  @IsInt()
  @IsOptional()
  id_course?: number;

  @IsInt()
  @IsOptional()
  day?: number;

  @IsInt()
  @IsOptional()
  month?: number;

  @IsInt()
  @IsOptional()
  year?: number;

  @IsInt()
  @IsOptional()
  hours?: number;

  @IsString()
  @IsOptional()
  justification?: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsInt()
  @IsOptional()
  period?: number;
}
