import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findOne(args: Prisma.UserFindFirstArgs): Promise<User | null> {
    return await this.prisma.user.findFirst(args);
  }

  public async createOne(dto: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data: { ...dto },
    });
  }
}
