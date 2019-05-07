module.exports = {
  name: 'my-amm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-amm/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
