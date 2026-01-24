import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from '@tutor-ai/shared-types';
import { FastifyReply } from 'fastify';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async register(dto: AuthDto, res: FastifyReply) {
    const hashedPassword = await hash(dto.password, 10);

    const user = await this.userService.createOne({
      name: dto.name,
      hashedPassword: hashedPassword,
    });

    return this.tokenService.generateTokens(
      {
        userId: user.id,
      },
      res,
    );
  }

  async login(dto: AuthDto, res: FastifyReply) {
    const user = await this.userService.findOne({
      where: {
        name: dto.name,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await compare(dto.password, user?.hashedPassword);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    return this.tokenService.generateTokens(
      {
        userId: user?.id,
      },
      res,
    );
  }

  async validateUser(email: string, password: string): Promise<void> {
    // TODO: Validate user credentials
  }
}
