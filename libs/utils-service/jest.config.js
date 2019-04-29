module.exports = {
  name: 'utils-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/utils-service',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
