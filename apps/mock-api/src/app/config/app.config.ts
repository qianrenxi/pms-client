import * as path from 'path';
import { pathExistsSync, mkdirpSync } from 'fs-extra';
import * as _ from 'lodash';

export interface AppConfig {
  workDir: string;
  content?: AppContentConfig;
}

export interface AppContentConfig {
  relativePath: string;
  contentRoot: string;
  temporaryPath?: string;
  uploadPath?: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  workDir: getWorkDir(),
  content: getDefaultContentConfig()
}

function getDefaultContentConfig(): AppContentConfig {
  const workDir = getWorkDir();

  const contentRoot = path.resolve(workDir, 'content');
  const temporaryPath = path.resolve(contentRoot, 'tmp');
  const uploadPath = path.resolve(contentRoot, 'upload');

  existsOrCreateDir(contentRoot);
  existsOrCreateDir(temporaryPath);
  existsOrCreateDir(uploadPath);

  return <AppContentConfig>{
    relativePath: '/content/',
    contentRoot: contentRoot,
    temporaryPath: temporaryPath,
    uploadPath: uploadPath,
  };
}

/**
 * 获取工作空间目录，
 * 如果对应路径目录还没有创建，会创建一个
 */
export function getWorkDir() {
  // 从环境变量中读取 QIMOOC_MOCK_WORKDIR
  let workDir = _.get(process, ['env', 'QIMOOC_MOCK_WORKDIR']);

  if (_.isEmpty(workDir)) {
    const runtimeProjectRoot = path.resolve(__dirname);
    const expectedPeojectRoot = path.resolve(runtimeProjectRoot, '../../../');

    if (pathExistsSync(path.join(expectedPeojectRoot, 'angular.json'))) {
      // 在 develop 工程中
      workDir = path.resolve(expectedPeojectRoot, 'tmp');
    } else {
      // 设置当前运行目录为 workDir
      workDir = runtimeProjectRoot;
    }
  }

  existsOrCreateDir(workDir);

  return workDir;
}

function existsOrCreateDir(dir: string) {
  if (!pathExistsSync(dir)) {
    try {
      mkdirpSync(dir);
    } catch (e) {
      // 创建目录失败
      console.error(`Failed to try to create dir '${dir}'. ${e}`);
    }
  }
}