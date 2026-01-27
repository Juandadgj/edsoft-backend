import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterAchievementDto {
  @IsInt()
  @IsOptional()
  id_course?: number;

  @IsInt()
  @IsOptional()
  period?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
