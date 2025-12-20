import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app';
import { Logger } from '@nestjs/common';
import { ResponseInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: 'http://localhost:5173', credentials: true });

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.PORT ?? 3000, () =>
    Logger.log('app is using 3000 port'),
  );
}
bootstrap();
