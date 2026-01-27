import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTeacherDto {
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
  @IsOptional()
  direction?: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  degree?: string;
}
