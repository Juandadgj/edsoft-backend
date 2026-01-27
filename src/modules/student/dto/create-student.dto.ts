import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsInt()
  type_id: number;

  @IsString()
  @IsNotEmpty()
  identification: string;

  @IsString()
  @IsNotEmpty()
  sex: string;

  @IsString()
  @IsOptional()
  direction?: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  guardian: string;

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

  @IsInt()
  id_group: number;
}
