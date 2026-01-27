import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsInt()
  id_student: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsInt()
  @IsOptional()
  type_id?: number;

  @IsString()
  @IsOptional()
  identification?: string;

  @IsString()
  @IsOptional()
  sex?: string;

  @IsString()
  @IsOptional()
  direction?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  guardian?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  birthday?: string;

  @IsString()
  @IsOptional()
  father?: string;

  @IsString()
  @IsOptional()
  mother?: string;

  @IsString()
  @IsOptional()
  email?: string;
}
