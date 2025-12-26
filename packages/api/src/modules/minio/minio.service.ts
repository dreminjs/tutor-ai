import { Injectable, Logger } from '@nestjs/common';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private readonly client: Client = new Client({
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: 9000,
    useSSL: false,
  });

  private readonly bucket = process.env.MINIO_BUCKET || 'index';

  private readonly logger = new Logger(MinioService.name);

  public async upload(file: Storage.MultipartFile): Promise<string> {
    const fileName = crypto.randomUUID() + file.fieldname;

    const ext = file.filename.substring(
      file.filename.lastIndexOf('.'),
      file.filename.length,
    );

    await this.client.putObject(this.bucket, `${fileName}${ext}`, file.buffer);

    return `${fileName}${ext}`;
  }
}
