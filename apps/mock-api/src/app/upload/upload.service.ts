import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { pathExistsSync, mkdirpSync, writeJSONSync,readJSONSync } from 'fs-extra';
import { AppConfigService } from '../config';

@Injectable()
export class UploadService {
    private attachmentsJsonFile: string;
    private attachments = [];

    constructor(
        private readonly appConfigService: AppConfigService
    ) {
        const temporaryPath = appConfigService.appConfig.content.temporaryPath;
        const attachmentsJsonFile = this.attachmentsJsonFile = path.resolve(temporaryPath, 'attachments.json');
        existsOrCreateDir(attachmentsJsonFile);
        if (!pathExistsSync(attachmentsJsonFile)){
            writeJSONSync(attachmentsJsonFile, []);
        } else {
            this.attachments = readJSONSync(attachmentsJsonFile);
        }
    }

    addAttatchment(file: any) {
        this.attachments.push(file);
        writeJSONSync(this.attachmentsJsonFile, this.attachments);
    }

    getAttachments() {
        return this.attachments;
    }
}


export function existsOrCreateDir(filePath: string) {
    const dirname = path.dirname(filePath);
    // console.log(path.dirname(outputFile))
    if (!pathExistsSync(dirname)) {
        try {
            mkdirpSync(dirname);
        } catch (e) {
            // 创建目录失败
        }
    }
}
