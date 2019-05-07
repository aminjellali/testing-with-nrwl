/**
 * @author: Amin Jellali
 * @email : a.j.aminjellali@gmail.com
 */
('use strict');
// importig the main app functions
const functions = require('./functions');
// file system extra
const fs = require('fs-extra');
// file system
const _fs = require('fs');
// lib to give cli some color
const chalk = require('chalk');
// cli handler
const commander = require('commander');

const synch = require('./synchronize');

/**
 * defining arguments
 * @help : log summary and keys info
 * @version : the running version of the remover
 * @type : {lib | app } to delete either a library or an app
 * @directory-name
 */
commander
  .version('1.0.0', '-v, --version')
  .usage(
    'this command makes it easier for you to delete apps or libraries from your nrwl/nx workspace'
  )
  .option(
    '-t, --type <lib | app>',
    '{lib | app } to delete either a library or an app'
  )
  .option('-d, --directory-name <directory name>', 'directory name to delete')
  .parse(process.argv);
console.log(
  chalk.magentaBright('**** e2e projects have to be deleted seperatly ****')
);

// plug arguments
const directoryName = commander.directoryName;
const type = commander.type;

// process input
const argumentsProcessResult = functions.definedInput(directoryName, type);
if (argumentsProcessResult !== true) {
  console.log(chalk.red(argumentsProcessResult));
  process.exit();
}
/* ------------------- CREATE BACKUP FILES ------------------- */
synch.createBackUpFiles(directoryName, type);
/* ------------------- REMOVING FILES ------------------- */
// functions.removeDirectory(directoryName, type);
/* ------------------- UPDATE NX FILE ------------------- */
