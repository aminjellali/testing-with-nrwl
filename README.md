## Unit Tests

to launch a unit test : `ng test <project-name> [options]`

**available options**

1. --help: shows a help message for this command in the console.
2. --code-coverage: inculde code coverage in the report, html report will be found in the coverage directory
3. --test-file: specify the name of the test file to be ran
4. --watch: watch files for changes and rerun tests related to changed files.
5. --watch-all: Watch files for changes and rerun all tests when something changes.

## e2e Tests

to launch a unit test : `ng e2e <project-name-e2e>`

**available options**

1. --help: shows a help message for this command in the console.
2. --watch: recompile and run tests when files change.
3. --headless: whether or not to open the Cypress application to run the tests. If set to 'true', will run in headless mode

## Nrwl/nx affected

[documentation link](https://nx.dev/api-npmscripts/)

**dependency graph**

command `npm run dep-graph` show dependencies between the libs and apps of the workspace in the form of a graph

**affected**

How it works: the nx workspace is actually smart enough to figure out the dependencies between your applications and
libraries and it uses that feature to compare your last commit (at least one commit has to happen) with the current code
and it launches the affected command on the changed parts.

command `npm run affected:[element] -- [Options]`

**element**

1. apps: print applications affected by changes [documentation link](https://nx.dev/api-npmscripts/affected-apps)
2. build: build applications and publishable libraries affected by changes [documentation link](https://nx.dev/api-npmscripts/affected-build)
3. dep-graph: graph dependencies affected by changes [documentation link](https://nx.dev/api-npmscripts/affected-dep-graph)
4. libs: print libraries affected by changes [documentation link](https://nx.dev/api-npmscripts/affected-libs)
5. test: run jest unit tests affected by the change [documentation link](https://nx.dev/api-npmscripts/affected-test)
6. e2e: run e2e tests affected by the change [documentation link](https://nx.dev/api-npmscripts/affected-e2e)

**Note:** the affected mechanism is visible if used alongside with git!
