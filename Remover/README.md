## WELCOME !
this folder contains the feature that helps you remove the apps and libs by:
1. creating a back up file with the date of the operation as a folder name, there you can find the app you were trying to delete, the angular.json and nx.json file before the delete.
2. removes the specified file.
3. update the anguilar.json and the nx.json files.

**How to use it**

if the command is not added in the package.json app please add this in the scripts
`"delete": "node ./Remover/remove-app-or-lib"`
else just hit 
`npm run delete -- --[options]`

**options**

1.  -h, --help: shows a help message for this command in the console.
2.  -v, --version: output the version number
3.  -t, --type <lib | app>: {lib | app } to delete either a library or an app
4.  -d, --directory-name <directory name>: directory name to delete
##Critical Note:
please add this snippet to the .gitignore file `/backUps` so that the backUps file wont be pushed to your git repo.