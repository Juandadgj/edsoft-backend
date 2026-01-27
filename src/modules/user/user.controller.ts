import {
  Controller,
  Post,
  Put,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from './dto/sign-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { InstitutionId } from 'src/common/decorators/institution-id.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.userService.signIn(signInDto);
  }

  @UseGuards(AuthGuard)
  @Put()
  update(
    @InstitutionId() id_institution: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id_institution, updateUserDto);
  }
}
