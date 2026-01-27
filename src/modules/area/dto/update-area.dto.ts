import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateAreaDto {
  @IsInt()
  id_area: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
