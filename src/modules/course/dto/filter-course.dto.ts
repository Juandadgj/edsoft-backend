import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterCourseDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_group?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_teacher?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  position?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  dimension_code?: number;

  @IsString()
  @IsOptional()
  dimension_type?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_area?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  hour?: number;

  @IsString()
  @IsOptional()
  average?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  percentage?: number;
}
