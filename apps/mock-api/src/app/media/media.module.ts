import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { UploadModule } from '../upload/upload.module';
import { AppConfigModule } from '../config';

@Module({
  imports: [
    AppConfigModule,
    UploadModule
  ],
  controllers: [
    MediaController,
  ],
  providers: [
    MediaService,
  ]
})
export class MediaModule { }
