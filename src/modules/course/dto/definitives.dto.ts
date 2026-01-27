import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDefinitivesDto {
  @IsInt()
  id_cour_stu: number;

  @IsString()
  @IsOptional()
  score1?: string;

  @IsString()
  @IsOptional()
  score2?: string;

  @IsString()
  @IsOptional()
  score3?: string;

  @IsString()
  @IsOptional()
  score4?: string;

  @IsString()
  @IsOptional()
  score5?: string;
}

export class FilterDefinitivesDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_course?: number;

  @IsString()
  @IsOptional()
  score1?: string;

  @IsString()
  @IsOptional()
  score2?: string;

  @IsString()
  @IsOptional()
  score3?: string;

  @IsString()
  @IsOptional()
  score4?: string;

  @IsString()
  @IsOptional()
  score5?: string;
}
