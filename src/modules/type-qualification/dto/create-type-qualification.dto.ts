import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTypeQualificationDto {
  @IsString()
  name: string;

  @IsNumber()
  floor_score: number;

  @IsNumber()
  ceiling_score: number;

  @IsInt()
  @IsOptional()
  year?: number;
}
