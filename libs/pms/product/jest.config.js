module.exports = {
  name: 'pms-product',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pms/product',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
