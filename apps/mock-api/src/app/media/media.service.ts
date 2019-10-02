import { Injectable } from '@nestjs/common';
import { UploadService } from '../upload/upload.service';

import * as mockjs from 'mockjs';
import * as path from 'path';
import { AppConfigService } from '../config';
import * as _ from 'lodash';

@Injectable()
export class MediaService {
    constructor(
        private readonly uploadService: UploadService,
        private readonly appConfigService: AppConfigService,
    ) { }

    getAll() {
        const attachments = this.uploadService.getAttachments();
        // console.log(attachments);

        const medias = attachments.map((it, index) => {
            const {originalname, endoding, mimetype, destination, filename, path: pyPath, size} = it;

            const mimeGroup = (mimetype as string).split('/')[0];
            const extname = path.extname(pyPath).slice(1);
            const { contentRoot, relativePath: relativePathRoot } = this.appConfigService.appConfig.content;
            const relativePath = path.relative(contentRoot, pyPath);
            const url = path.normalize(path.join(relativePathRoot, relativePath));

            return {
                id: index + 1,
                name: originalname,
                type: mimeGroup,
                ext: extname,
                filename: originalname,
                mimetype: mimetype,
                size: size,
                url: url,
                thumbnail: (mimeGroup === 'image' ? url : null)
            }
        }).reverse();
        
        return medias;
    }

    getOne(id: number) {
        const all = this.getAll();
        const item = id > 0 && id <= all.length ? all.reverse()[id - 1] : undefined;

        return item;
    }

    getAdjacentSiblingIds(id: number, sort?: any) {
        const all = this.getAll();
        return {
            prev: id > 1 ? id - 1 : null,
            next: id < all.length ? id + 1 : null
        };
    }
}
