"use strict";

var fs = require('fs'),
    path = require('path'),
    gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    file = require("gulp-file"),
    requirejsOptimize = require('gulp-requirejs-optimize');

var paths = {
    webroot: "./wwwroot/",
    distroot: "./dist/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.distroot + "js/site.min.js";
paths.concatCssDest = paths.distroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task("min:js", function () {

    var bundles = {};

    var main = function (resolve, reject) {
        gulp.src(paths.webroot + 'js/main.js')
            .pipe(requirejsOptimize({
                optimize: 'none',
                onBuildWrite: function (moduleName, path, contents) {
                    if (moduleName.indexOf('Plugins/') == 0) {
                        return '';
                    } else {
                        if (bundles['main'] == null) {
                            bundles['main'] = [];
                        }
                        bundles['main'].push(moduleName);
                        return contents;
                    }
                }
            }))
            .on('error', reject)
            .pipe(gulp.dest('dist/js'))
            .on('end', resolve);
    };

    var plugins = function (resolve, reject) {
        var folders = getFolders(paths.webroot + "js/Plugins");
        folders.map(function (folder) {
            console.log('Generating ' + folder + '.js');
            file(folder + '.js', '', { src: true })
                .pipe(requirejsOptimize({
                    out: folder + '.js',
                    baseUrl: paths.webroot + "js/",
                    optimize: 'none',
                    include: ["Plugins/" + folder + '/' + folder],
                    onBuildWrite: function (moduleName, path, contents) {
                        if (bundles['main'].indexOf(moduleName) < 0) {
                            if (bundles[folder] == null) {
                                bundles[folder] = [];
                            }
                            bundles[folder].push(moduleName);
                            return contents;
                        } else {
                            console.log('Excluding ' + moduleName + ' from ' + folder + ' bundle as it is included in main bundle.')
                            return '';
                        }
                    },
                }))
                .on('error', reject)
                .pipe(gulp.dest('dist/js'))
                .on('end', resolve);
        });
    };

    var bundleConfig = function (resolve, reject) {
        console.log('Generating bundle.config.js');
        file('bundles.config.js', 'requirejs.config({\
    bundles:' + JSON.stringify(bundles) + '});\
require([\'main\'], function () { });', { src: true })
            .on('error', reject)
            .pipe(gulp.dest('dist/js'))
            .on('end', resolve)
    };

    return Promise.all([new Promise(main)])
        .then(function () {
            return Promise.all([new Promise(plugins)]);
        })
        .then(function () {
            return Promise.all([new Promise(bundleConfig)]);
        });
});

//gulp.task("plugins:js", function () {
//    //return gulp.src([paths.js, "!" + paths.minJs], { base: "." })

//    //    //.pipe(uglify())
//    //    .pipe(requirejsOptimize())
//    //    //.pipe(concat(paths.concatJsDest))
//    //    .pipe(gulp.dest(paths.concatJsDest));

//    return gulp.src(paths.webroot + 'js/main.js')
//        .pipe(requirejsOptimize({
//            out: 'ExamplePlugin.js',
//            baseUrl: paths.webroot + "js/",
//            optimize: 'none',
//            insertRequire: ['Plugins/ExamplePlugin'],
//            exclude: [
//                "Plugins/BasePlugin"
//            ]
//        }))
//        .pipe(gulp.dest('dist/js'));


//});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);