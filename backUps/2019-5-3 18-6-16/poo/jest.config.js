module.exports = {
  name: 'poo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/poo/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
