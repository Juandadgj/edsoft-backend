import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsInt()
  id_group: number;

  @IsInt()
  id_teacher: number;

  @IsString()
  name: string;

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
  id_area: number;

  @IsInt()
  hour: number;

  @IsString()
  @IsOptional()
  average?: string;

  @IsInt()
  @IsOptional()
  percentage?: number;
}
