import { IsInt, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsInt()
  id_user: number;

  @IsString()
  user: string;

  @IsString()
  password: string;

  @IsString()
  typeu: string;

  @IsString()
  status: string;

  @IsString()
  belongs: string;
}
