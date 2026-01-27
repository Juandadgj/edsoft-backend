import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterEnrollmentDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_group?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  year?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  reason_desertion?: string;

  @IsString()
  @IsOptional()
  date_desertion?: string;
}
