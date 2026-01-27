import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateGroupDto {
  @IsInt()
  id_group: number;

  @IsString()
  @IsOptional()
  working_time?: string;

  @IsString()
  @IsOptional()
  representative?: string;
}
