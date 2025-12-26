import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { Files } from 'src/decorators/file.decorator';
import { MultipartInterceptor } from 'src/interceptors/multipart.interceptor';
import { MinioService } from './minio.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('minio')
export class MinioController {
  constructor(private readonly minioService: MinioService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Файл (опционально)',
        },
      },
    },
  })
  @UseInterceptors(
    MultipartInterceptor({ fileType: 'jpeg', maxFileSize: 1000_000 }),
  )
  @Post()
  public async index(@Files() files: Record<string, Storage.MultipartFile[]>) {
    return await this.minioService.upload(files.file[0]);
  }
}
