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
   * In case an error was made this function creates a back-up directory with
   * current date as it's name to be able to revert changes
   * @param  {any} directoryName
   * @param  {any} fileType
   * @param  {any} timeString
   * @return {Promise}
   */
  createDirectoryBackUp: function(directoryName, fileType, timeString) {
    // console.log(process.cwd());
    return new Promise((resolve, reject) => {
      const backUpDirectoryName = process.cwd() + '/backUps/';
      const directoryNameByDate = formatDestinationFileName(timeString);
      const destinationDirectory =
        backUpDirectoryName + directoryNameByDate + '/' + directoryName;
      var recalibratedDirectoryName = '';
      if (fileType === 'app') {
        recalibratedDirectoryName = process.cwd() + '/apps/' + directoryName;
      } else if (fileType === 'lib') {
        recalibratedDirectoryName = process.cwd() + '/libs/' + directoryName;
      }
      fs.copy(recalibratedDirectoryName, destinationDirectory)
        .then(() => {
          resolve(
            console.log(
              chalk.green('       CREATE ') +
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
          // Remove the temp empty file in case of a failure of the operation
          fs.rmdir(backUpDirectoryName + directoryNameByDate).then(() =>
            console.log('done').catch(err => console.log(err))
          );
          process.exit();
        });
    });
  },
  /**
   * In case an error was made this function creates a back-up directory with
   * current date as it's name to be able to revert changes
   * @param  {any} fileName
   * @param  {any} timeString
   */
  createFileBackUp:  function(fileName, timeString) {
    return new Promise ((resolve, reject)=>{
      const backUpFileName = process.cwd() + '/backUps/';
    const fileNameByDate = formatDestinationFileName(timeString);
    const destinationFile =backUpFileName + fileNameByDate + '/' + fileName;
    const recalibratedFileName = process.cwd() + '/'+fileName;
    // console.log(recalibratedFileName + '---->' + destinationFile)
     fs
      .copy(recalibratedFileName, destinationFile)
      .then(() => {
        resolve(console.log(
          chalk.green('       CREATE') +
            process.cwd() +
            '\\' +
            'backUps' +
            '\\' +
            fileNameByDate +
            '\\' +
            fileName
        ));
      })
      .catch(err => {
        reject(console.log(
          error(
            'FATAL: The specified directory ' +
              fileName +
              ' could not be found '
          ) + err
        ))
        process.exit();
      })
    });
  },
  removeDirectory: async function(directoryName, type) {
    if (type === 'lib') {
      await rimraf.sync(process.cwd() + '/libs/' + directoryName);
    } else if (type === 'app') {
      await rimraf.sync(process.cwd() + '/apps/' + directoryName);
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
