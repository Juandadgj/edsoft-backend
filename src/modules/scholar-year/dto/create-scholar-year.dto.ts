import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateScholarYearDto {
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
