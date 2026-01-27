import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterFeaturedDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_group?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;
}
