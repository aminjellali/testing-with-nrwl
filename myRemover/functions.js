/**
 * @author: Amin Jellali
 * @email : a.j.aminjellali@gmail.com
 */
// file system
const fs = require('fs-extra');
// lib to give cli some color
const chalk = require('chalk');
// package to remove non empty directories
const rimraf = require('rimraf');
const error = chalk.underline.red;

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
      return 'ERROR the directory name argument is not defined use --help argument for help';
    else if (typeName === undefined)
      return 'ERROR the type argument is not defined use --help argument for help';
    else if (typeName != 'lib' && typeName != 'app') {
      return 'ERROR the type argument can be either "lib" or "app" use --help argument for help';
    }
    return true;
  },
  /**
   * @summary creates back up for a directory
   * @param {string} directoryName
   */
  createDirectoryBackUp: async function(directoryName, fileType, timeString) {
    return new Promise((resolve, reject) => {
      const backUpDirectoryName = './backUps/';
      const directoryNameByDate = formatDestinationFileName(timeString);
      const destinationDirectory =
        backUpDirectoryName + directoryNameByDate + '/' + directoryName;
      var recalibratedDirectoryName = '';
      if (fileType === 'app') {
        recalibratedDirectoryName = './apps/' + directoryName;
      } else if (fileType === 'lib') {
        recalibratedDirectoryName = './libs/' + directoryName;
      }
      fs.copy(recalibratedDirectoryName, destinationDirectory)
        .then(() => {
          resolve(
            console.log(
              chalk.green('       CREATE') +
                process.cwd() +
                '\\' +
                'backUps' +
                '\\' +
                directoryNameByDate +
                '\\' +
                directoryName
            )
          );
        })
        .catch(err => {
          reject(
            console.log(
              chalk.red('FATAL: The specified directory ') +
                error(directoryName) +
                chalk.red(' could not be found in path ') +
                chalk.yellow(err.path)
            )
          );
          // Remove the temp empty file
          fs.rmdir(backUpDirectoryName + directoryNameByDate);
          process.exit();
        });
    });
  },
  createFileBackUp: async function(fileName, timeString) {
    const backUpFileName = './backUps/';
    const fileNameByDate = formatDestinationFileName(timeString);
    const destinationFile = backUpFileName + fileNameByDate + '/' + fileName;
    const recalibratedFileName = fileName;
    await fs
      .copy(recalibratedFileName, destinationFile)
      .then(() => {
        console.log(
          chalk.green('       CREATE') +
            process.cwd() +
            '\\' +
            'backUps' +
            '\\' +
            fileNameByDate +
            '\\' +
            fileName
        );
      })
      .catch(err => {
        console.log(
          error(
            'FATAL: The specified directory ' +
              fileName +
              ' could not be found '
          )
        );
        process.exit();
      });
  },
  removeDirectory: async function(directoryName, type) {
    if (type === 'lib') {
      await rimraf.sync('./libs/' + directoryName);
    } else if (type === 'app') {
      await rimraf.sync('./apps/' + directoryName);
    }
  },
  removeDirAttrFormNx(jsonNx, fileName) {
    delete jsonNx.projects[fileName];
    return jsonNx;
  },
  removeDirAttrFromAngular(jsonAngular, fileName) {
    delete jsonAngular.projects[fileName];
    return jsonAngular;
  }
};
/*-*******************  Functions  *******************-*/
function formatDestinationFileName(current_datetime) {
  // const current_datetime = new Date();
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
