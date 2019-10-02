import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import * as path from 'path';
import * as multer from 'multer';
import * as crypto from 'crypto';
import { AppConfigService, AppConfigModule } from '../config';


function multerFactory1() {
  const uploadDir = '/mnt/e/data/content/upload';
  return {
    dest: uploadDir
  };
}

function multerFactory2(appConfigService: AppConfigService) {
  // const uploadDir = '/mnt/e/data/content/upload';
  const uploadDir = appConfigService.appConfig.content.uploadPath;

  const srotage = multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, '/tmp/my-uploads')
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      const {originalname} = file;
      const extname = path.extname(originalname);
      // console.log(extname);
      // cb(null, file.fieldname + '-' + Date.now())
      crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(err, err ? undefined : `${raw.toString('hex')}${extname}`)
      });
    }
  })
  return {
    // dest: uploadDir
    storage: srotage
  };
}


@Module({
  imports: [
    AppConfigModule,
    MulterModule.registerAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfigService: AppConfigService) => multerFactory2(appConfigService),
      inject: [AppConfigService]
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [
    UploadService,
  ]
})
export class UploadModule {}
