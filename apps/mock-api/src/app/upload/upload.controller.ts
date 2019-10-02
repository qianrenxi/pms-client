import { Controller, UploadedFile, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import {FileInterceptor, FilesInterceptor, AnyFilesInterceptor} from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {

    constructor(
        private readonly uploadService: UploadService
    ) {

    }

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: any) {
        this.uploadService.addAttatchment(file);

        return file;
    }

    @Post('files')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFiles(@UploadedFiles() files: any) {
        files.forEach(file => {
            this.uploadService.addAttatchment(file);
        });

        return files;
    }

    @Post()
    @UseInterceptors(AnyFilesInterceptor())
    uploadAnyFiles(@UploadedFiles() files: any[]) {
        files.forEach(file => {
            this.uploadService.addAttatchment(file);
        });

        return files;
    }
}
