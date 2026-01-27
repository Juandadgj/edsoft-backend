import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateEnrollmentDto {
  @IsInt()
  id_enrollment: number;

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
