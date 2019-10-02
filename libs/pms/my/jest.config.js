module.exports = {
  name: 'pms-my',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pms/my',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
