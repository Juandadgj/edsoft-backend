import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterEnrollmentDto {
  @IsInt()
  @IsOptional()
  id_student?: number;

  @IsInt()
  @IsOptional()
  id_group?: number;

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
