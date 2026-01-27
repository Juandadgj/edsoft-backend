import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterGroupDto {
  @IsInt()
  @IsOptional()
  id_year?: number;

  @IsInt()
  @IsOptional()
  level?: number;

  @IsString()
  @IsOptional()
  sublevel?: string;

  @IsString()
  @IsOptional()
  working_time?: string;

  @IsString()
  @IsOptional()
  representative?: string;
}
