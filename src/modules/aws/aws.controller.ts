import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AwsService } from './aws.service';
import { UploadDto } from './dto/upload.dto';

@Controller('aws')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Post('upload')
  async uploadFile(@Body() uploadDto: UploadDto) {
    return await this.awsService.uploadFile(uploadDto.file, uploadDto.path);
  }

  @Get('file')
  async getFile(@Query('key') key: string) {
    return await this.awsService.getFile(key);
  }
}
