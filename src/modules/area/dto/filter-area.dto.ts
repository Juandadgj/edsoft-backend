import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterAreaDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
