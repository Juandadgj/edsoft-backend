import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAchievementDto {
  @IsInt()
  id_course: number;

  @IsInt()
  period: number;

  @IsString()
  description: string;
}
