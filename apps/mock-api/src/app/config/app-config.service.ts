import { AppConfig, DEFAULT_APP_CONFIG } from './app.config';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class AppConfigService {
  appConfig: AppConfig = DEFAULT_APP_CONFIG;

  get<T>(path: string | string[]): T {
    if (_.has(this.appConfig, path)) {
      return _.get(this.appConfig, path);
    }
  }
}