import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterGroupDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_year?: number;

  @Type(() => Number)
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
