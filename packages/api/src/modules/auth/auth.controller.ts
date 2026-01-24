import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';
import { IStandartResponse } from '@tutor-ai/shared-types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res() response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.register(dto, response);
  }

  @Post('login')
  async login(
    @Body() dto: AuthDto,
    @Res() response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.login(dto, response);
  }
}
