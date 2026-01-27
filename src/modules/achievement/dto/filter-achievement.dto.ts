import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterAchievementDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_course?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  period?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
