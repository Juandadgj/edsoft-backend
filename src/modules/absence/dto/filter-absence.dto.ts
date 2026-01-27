import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterAbsenceDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_course?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  day?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  month?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  year?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  hours?: number;

  @IsString()
  @IsOptional()
  justification?: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  period?: number;
}
