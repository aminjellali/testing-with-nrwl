module.exports = {
  name: 'e2e-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/e2e-test/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
