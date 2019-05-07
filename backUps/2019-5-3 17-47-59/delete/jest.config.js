module.exports = {
  name: 'delete',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/delete/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
