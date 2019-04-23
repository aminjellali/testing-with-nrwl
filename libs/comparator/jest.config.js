module.exports = {
  name: 'comparator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/comparator',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
