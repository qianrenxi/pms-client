import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { UploadModule } from './upload/upload.module';
import { AppConfigService, AppConfigModule } from './config';
import { ProModule } from './pro/pro.module';


@Module({
  imports: [
    MediaModule, 
    UploadModule,
    AppConfigModule,
    ProModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
  exports: [
    AppConfigModule
  ]
})
export class AppModule {}
