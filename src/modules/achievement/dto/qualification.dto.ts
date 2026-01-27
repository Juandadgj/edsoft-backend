import { IsInt, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateQualificationDto {
  @IsInt()
  @IsOptional()
  id_achie_stu?: number;

  @IsInt()
  @IsOptional()
  id_achievement?: number;

  @IsInt()
  @IsOptional()
  id_student?: number;

  @IsNumber()
  score: number;
}

export class UpdateQualificationsDto {
  @IsArray()
  qualifications: CreateQualificationDto[];
}

export class FilterQualificationDto {
  @IsInt()
  @IsOptional()
  id_student?: number;

  @IsInt()
  @IsOptional()
  id_course?: number;

  @IsInt()
  @IsOptional()
  period?: number;
}
