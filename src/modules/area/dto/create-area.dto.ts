import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  status?: string;
}
