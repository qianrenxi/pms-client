module.exports = {
  name: 'pms-test',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pms/test',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
