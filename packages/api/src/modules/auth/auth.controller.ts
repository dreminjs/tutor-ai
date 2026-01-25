import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';
import { IStandartResponse } from '@tutor-ai/shared-types';
import { CurrentUser } from '../user/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.register(dto, response);
  }

  @Post('login')
  async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.login(dto, response);
  }

  @Delete('logout')
  async logout(@CurrentUser('id') userId: string): Promise<void> {
    await this.authService.logout(userId);
  }
}
