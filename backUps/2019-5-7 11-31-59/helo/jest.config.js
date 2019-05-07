module.exports = {
  name: 'helo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/helo/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
