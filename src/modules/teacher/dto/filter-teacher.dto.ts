import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterTeacherDto {
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
  direction?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  degree?: string;
}
