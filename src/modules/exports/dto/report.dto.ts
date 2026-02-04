import { IsInt, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class SignatureInput {
  @IsBoolean()
  @IsOptional()
  professor_group?: boolean;

  @IsBoolean()
  @IsOptional()
  secretary?: boolean;

  @IsBoolean()
  @IsOptional()
  rector?: boolean;
}

export class ReportDictionary {
  @Type(() => SignatureInput)
  signature: SignatureInput;

  @IsBoolean()
  @IsOptional()
  average_general?: boolean;

  @IsBoolean()
  @IsOptional()
  average_group?: boolean;

  @IsBoolean()
  @IsOptional()
  average_area?: boolean;

  @IsBoolean()
  @IsOptional()
  position?: boolean;

  @IsBoolean()
  @IsOptional()
  username?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per1?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per2?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per3?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per4?: boolean;

  @IsBoolean()
  @IsOptional()
  qualification_per5?: boolean;

  @IsBoolean()
  @IsOptional()
  average_per?: boolean;

  @IsBoolean()
  @IsOptional()
  all_qualifications?: boolean;

  @IsBoolean()
  @IsOptional()
  professor_course?: boolean;

  @IsBoolean()
  @IsOptional()
  hour?: boolean;

  @IsBoolean()
  @IsOptional()
  absences?: boolean;

  @IsBoolean()
  @IsOptional()
  showLogo?: boolean;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  headerTitleSize?: number;

  @IsBoolean()
  @IsOptional()
  showHeaderSubtitle?: boolean;

}

export class ReportAreaDto {
  @Type(() => Number)
  @IsInt()
  id_group: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id_student?: number;
}
