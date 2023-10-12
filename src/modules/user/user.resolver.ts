import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { SignInInput, UpdateUserInput } from 'src/shared/interfaces/graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('signIn')
  findAll(@Args('signInInput') signInInput: SignInInput) {
    return this.userService.signIn(signInInput);
  }

  @Mutation('updateUser')
  update(
    @Args('id_institution') id_institution: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id_institution, updateUserInput);
  }
}
