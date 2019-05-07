module.exports = {
  name: 'hello',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hello/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
