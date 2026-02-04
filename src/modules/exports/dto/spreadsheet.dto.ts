import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class StudentsListUndeterminatedDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;
}

export class StudentsListDeterminatedDto {
  @Type(() => Number)
  @IsInt()
  id_course: number;

  @Type(() => Number)
  @IsInt()
  id_group: number;
}

export class AchievementsAndIndicatorsDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;

  @Type(() => Number)
  @IsInt()
  id_course: number;

  @Type(() => Number)
  @IsInt()
  period: number;
}
