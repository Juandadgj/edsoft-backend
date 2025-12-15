import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AwsService {
  private readonly s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  async uploadFile(file: string, path: string) {
    const base64Data = Buffer.from(
      file.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );
    const extension = file.split(';')[0].split('/')[1];
    const key = `${path}.${extension}`;
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: key,
        Body: base64Data,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: `image/${extension}`,
      }),
    );
    return `https://{process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
  }

  async getFile(key: string) {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });
    const response = await this.s3Client.send(command);
    return response.Body.transformToString('base64');
  }
}
