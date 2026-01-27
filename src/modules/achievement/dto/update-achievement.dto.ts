import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateAchievementDto {
  @IsInt()
  id_achievement: number;

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
