import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsInt()
  id_year: number;

  @IsInt()
  level: number;

  @IsString()
  sublevel: string;

  @IsString()
  @IsOptional()
  working_time?: string;

  @IsString()
  representative: string;
}
