import { IsOptional, IsString } from 'class-validator';

export class FilterStudentDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  identification?: string;
}
