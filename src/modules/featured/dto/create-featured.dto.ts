import { IsInt, IsOptional } from 'class-validator';

export class CreateFeaturedDto {
  @IsInt()
  @IsOptional()
  id_group?: number;

  @IsInt()
  @IsOptional()
  id_student?: number;
}
