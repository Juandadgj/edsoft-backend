import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsInt()
  id_institution: number;

  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
