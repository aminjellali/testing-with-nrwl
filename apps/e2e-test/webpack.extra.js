module.exports = {
    externals: {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        // libraryTarget: "umd"
    }

}