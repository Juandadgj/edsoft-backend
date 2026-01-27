import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateInstitutionDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  register?: string;

  @IsString()
  @IsOptional()
  direction?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  responsible?: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString()
  @IsOptional()
  user?: string;

  @IsInt()
  @IsOptional()
  pay_inscription?: number;

  @IsInt()
  @IsOptional()
  monthly_pay?: number;

  @IsString()
  @IsOptional()
  day?: string;

  @IsString()
  @IsOptional()
  month?: string;

  @IsString()
  @IsOptional()
  year?: string;

  @IsInt()
  @IsOptional()
  version?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  message?: string;

  @IsString()
  @IsOptional()
  information?: string;
}
