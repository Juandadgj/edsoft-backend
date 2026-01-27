import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterCourseDto {
  @IsInt()
  @IsOptional()
  id_group?: number;

  @IsInt()
  @IsOptional()
  id_teacher?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  position?: number;

  @IsInt()
  @IsOptional()
  dimension_code?: number;

  @IsString()
  @IsOptional()
  dimension_type?: string;

  @IsInt()
  @IsOptional()
  id_area?: number;

  @IsInt()
  @IsOptional()
  hour?: number;

  @IsString()
  @IsOptional()
  average?: string;

  @IsInt()
  @IsOptional()
  percentage?: number;
}
