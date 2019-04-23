module.exports = {
  name: "widgets-project",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/widgets-project/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
