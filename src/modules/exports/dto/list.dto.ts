import { IsNumber, IsOptional, IsArray, IsString } from 'class-validator';

export class GenerateListDto {
  @IsNumber()
  @IsOptional()
  groupId?: number;

  @IsArray()
  @IsOptional()
  fields?: string[];
}
