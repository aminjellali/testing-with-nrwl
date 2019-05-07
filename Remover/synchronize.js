('use strict');
// importig the main app functions
const functions = require('./functions');
// file system
const fs = require('fs-extra');
// lib to give cli some color
const chalk = require('chalk');
// package to remove non empty directories
const rimraf = require('rimraf');
const error = chalk.underline.red;
module.exports = {
  createBackUpFiles: async function(directoryName, type) {
    console.log(chalk.cyanBright('Creating back up files ...'));
    const currentDateTime = new Date();
    await functions.createDirectoryBackUp(directoryName, type, currentDateTime);
    await functions.createFileBackUp('angular.json', currentDateTime);
    await functions.createFileBackUp('nx.json', currentDateTime);

    console.log(chalk.red('Removing files ...'));
    functions.removeDirectory(directoryName, type);
    let nxJsondirectory = fs.readFileSync(process.cwd() + '/nx.json');
    // parse the angular.json directory to a json Object
    let jsonNx = JSON.parse(nxJsondirectory);

    // making changes
    functions.removeDirAttrFormNx(jsonNx, directoryName);
    // persisting changes
    fs.writeJson(process.cwd() + '/nx.json', jsonNx);
    /* ------------------- UPDATE ANGULAR FILE ------------------- */
    let angularJsondirectory = fs.readFileSync(process.cwd() + '/angular.json');
    // parse the angular.json directory to a json Object
    let jsonAngular = JSON.parse(angularJsondirectory);
    // making changes
    functions.removeDirAttrFromAngular(jsonAngular, directoryName);
    // persisting changes
    fs.writeJson(process.cwd() + '/angular.json', jsonAngular);
    setTimeout(() => {
      console.log(chalk.bgBlue('done !'));
    }, 500);
  }
};
