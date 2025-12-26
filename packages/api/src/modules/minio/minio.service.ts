import { Injectable } from '@nestjs/common';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  client: Client = new Client({
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: 9000,
    useSSL: false,
  });

  private readonly bucket = process.env.MINIO_BUCKET || 'index';

  public async upload(file: Storage.MultipartFile): Promise<string> {
    const fileName = crypto.randomUUID();
    await this.client.putObject(
      this.bucket,
      fileName + file.filename,
      file.buffer,
    );

    return fileName;
  }
}
