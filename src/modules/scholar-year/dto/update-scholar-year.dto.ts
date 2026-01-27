import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateScholarYearDto {
  @IsInt()
  id_year: number;

  @IsString()
  @IsOptional()
  rector?: string;

  @IsString()
  @IsOptional()
  secretary?: string;

  @IsString()
  @IsOptional()
  comment?: string;
}
