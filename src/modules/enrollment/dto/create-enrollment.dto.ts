import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsInt()
  id_student: number;

  @IsInt()
  id_group: number;

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
