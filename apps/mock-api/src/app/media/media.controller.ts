import { Controller, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { MediaService } from './media.service';
import * as _ from 'lodash';

@Controller('media')
export class MediaController {
    
    constructor(
        private readonly mediaService: MediaService
    ) { }

    @Get()
    allMedias() {
        return this.mediaService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        const item = this.mediaService.getOne(+id);

        if (!item) {
            return new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        return item;
    }

    @Get(':id/detail')
    getDetail(@Param('id') id: number, querys?: any) {
        const item = this.mediaService.getOne(+id);

        if (!item) {
            return new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        const adjacentIds = this.mediaService.getAdjacentSiblingIds(+id);

        return _.assign({}, {item}, adjacentIds);
    }
}
