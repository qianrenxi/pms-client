module.exports = {
  name: 'pms-project',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pms/project',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
