# Minotore Project

Monorepo for custom widgets and related libraries.

This project was generated using [Nx](https://nx.dev).

## Up & Running

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have `npm` to be able to run this project.

It is recommended to install `angular/cli` and `nrwl/schematics` globaly in your system.

```
npm install -g @angular/cli
npm install -g nrwl/schematics
```

### Installing project dependencies

1. Run `npm install` to install all dependencies.

```
npm install
```

## Getting started

You can create a widget using the workspace-schematic `widget`.

### Generating the widget

To generate a widget application you use the generate widget schematic.
This schematic will generate a widget application under the `apps/my-widget-app/` folder, with a subfolder `src/app/custom-widget/` that contains the widget logics.

1. Run `widget` schematic with your widget app name to generate a widget application:

```
ng generate widget my-widget-app
ng g wid my-widget-app // same command
```

2. you must provide a valid widget name ( Tag ) to the schematic. Note that custom element names require a **dash (-)** to be used in them; they can't be single words. _By default_ the widget name is `custom-widget`:

```
? What name would you like to use for the custom widget? (custom-widget) my-widget-name
```

**Note:** You should be able to create multiple widget applications in the same CLI workspace.

### Building and Bundling the widget

After generating the widget application, you can build it with the `elements:build` script provided in the `package.json`:

1. Run the `elements:build` script with the name of the application to build it:

```
npm run elements:build my-widget-app
```

You will see that the widget app is built under the `dist/apps/my-widget-app/` folder.

2. To bundle the build artifacts under the `dist/apps/my-widget-app/` use the `elements:bundle` script provided with the name of the application:

```
npm run elements:bundle my-widget-app
```

You will see that just one bundle with the name of the application is created under `elements/widget/` folder.

### Starting the widget

After building and bundling the widget app, to test it, you should update the `index.html` file under the `elements/` folder and then run `elements:start` script.

1. Update the `index.html` widget tag and the bundle script import:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...

    <!-- Widget -->

    <script type="text/javascript" src="./widgets/my-widget-app.js"></script>
    <my-widget-name></my-widget-name>
  </body>
</html>
```

2. Run the `elements:start` to start a http server under `http://localhost:4200`:

```
npm run elements:start
```

**Note:** You can update the `elements:start:proxy` script under `package.json` with the specified proxy config to start the widget under a reverse proxy.

### Development

For development, you can use `ng serve` provided with the name of application to start the app under `http://localhost:4200`. this action requires updates to the `app.module.ts`.

1.  Uncomment the bootstarp array and comment the entryComponent's:

```javascript
    @NgModule({
        ...
        // entryComponents: [ CustomWidgetComponent] ,
        bootstrap: [ AppComponent ],
        ...
    })
```

**Note:** You should undo this update in production in order to build and bundle the widget.

2. Run `start` script with the name of tha application to serve it:

```
npm run start my-widget-app
```

**Note:** You can update the `proxy.conf.json` file under `utils/proxy` with the specified proxy config to serve the widget app under a reverse proxy.

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
