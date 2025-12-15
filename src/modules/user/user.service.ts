import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { SignInInput, UpdateUserInput } from 'src/shared/interfaces/graphql';
import { PrismaClientManager } from 'src/config/prisma-client.manager';

@Injectable()
export class UserService {
  constructor(private readonly prismaManager: PrismaClientManager) {}
  private roles = ['Administrator', 'Secretary', 'Teacher', 'Student'];

  async signIn(signInInput: SignInInput) {
    const DB = String(signInInput.id_institution);
    const prisma = this.prismaManager.getClient(DB);
    const userDB = await prisma.user.findFirst({
      where: { user: signInInput.user },
    });
    if (!userDB) throw new Error('User not found');
    if (signInInput.password != userDB.password)
      throw new Error('Incorrect password');
    const token = jwt.sign(
      {
        id_user: userDB.id_user,
        id_institution: signInInput.id_institution,
        role: this.roles[userDB.typeu - 1],
      },
      process.env.SECRET,
      { expiresIn: 86400 },
    );
    return {
      token: token,
      role: this.roles[userDB.typeu - 1],
    };
  }

  async update(id_institution: string, updateUserInput: any) {
    const prisma = this.prismaManager.getClient(id_institution);
    return await prisma.user.update({
      where: { id_user: updateUserInput.id_user },
      data: updateUserInput,
    });
  }
}
