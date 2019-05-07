('use strict');
// importig the main app functions
const functions = require('./functions');

// lib to give cli some color
const chalk = require('chalk');
module.exports = {
  createBackUpFiles: async function(directoryName, type) {
    console.log(chalk.cyanBright('Creating back up files ...'));

    const currentDateTime = new Date();
    await functions.createDirectoryBackUp(directoryName, type, currentDateTime);
    await functions.createFileBackUp('angular.json', currentDateTime);
    await functions.createFileBackUp('nx.json', currentDateTime);

    console.log(chalk.cyanBright('Removing files ...'));
    functions.removeDirectory(directoryName, type);
  }
};
