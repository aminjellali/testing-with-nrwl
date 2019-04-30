/**
 * @author: Amin Jellali
 * @email : a.j.aminjellali@gmail.com
 */

const minimist = require('minimist');
// file system
const fs = require('fs-extra');
// lib to give cli some color
const chalk = require('chalk');
// cli handler
const commander = require('commander');

/*-*******************  Functions  *******************-*/
module.exports = {
  /**
   * @summary tests if the inputs are well defined
   * @param {string} directoryName
   * @param {string} typeName
   * @returnsreturns true if inputs are defined else
   * returns an error message
   */
  definedInput: function(directoryName, typeName) {
    if (directoryName === undefined)
      return 'ERROR the directory name argument is not defined';
    else if (typeName === undefined)
      return 'ERROR the type argument is not defined';
    return true;
  },
  /**
   * @summary creates back up for a directory
   * @param {string} directoryName
   */
  createDirectoryBackUp: function(directoryName) {
    fs.copy('angular.json', './backUps/back-up-angular_1.json')
      .then(() => {
        console.log(
          chalk.green('CREATE ') +
            process.cwd() +
            '\backUps\back-up-angular.json'
        );
      })
      .catch(err => console.error(err));
  },
  createFileBackUp: function(fileName) {
    const backUpFileName = './backUps/';
    const fileNameByDate = formatDestinationFileName();
    const destinationFile = backUpFileName + fileNameByDate + '/' + fileName;
    const recalibratedFileName = fileName;
    console.log(destinationFile);
    fs.copy(recalibratedFileName, destinationFile)
      .then(() => {
        console.log(
          chalk.green('CREATE ') +
            process.cwd() +
            '\\' +
            'backUps ' +
            '\\' +
            fileNameByDate +
            '\\' +
            fileName
        );
      })
      .catch(err => console.error(err));
  },
  removeDirectory: function(directoryName, type) {
    if (type === 'lib') {
      console.log(chalk.blue('should Remove app'));
    } else if (type === 'app') {
      rimraf('./apps/' + directoryName);
      console.log();
    }
  }
};

/*-*******************  Functions  *******************-*/
function formatDestinationFileName() {
  const current_datetime = new Date();
  const formatted_date =
    current_datetime.getFullYear() +
    '-' +
    (current_datetime.getMonth() + 1) +
    '-' +
    current_datetime.getDate() +
    ' ' +
    current_datetime.getHours() +
    '-' +
    current_datetime.getMinutes() +
    '-' +
    current_datetime.getSeconds();
  return formatted_date;
}
