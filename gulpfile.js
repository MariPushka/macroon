// 'use strict';
// const gulp = require('gulp');
// const less = require('gulp-less');
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
//
// gulp.task('less', function () {
// return gulp.src('./src/styles/*.less')
// .pipe(less())
// .pipe(cssmin())
// .pipe(rename({suffix:'.min'}))
// .pipe(gulp.dest('./dist'));
//
// });
//
// exports.default = defaultTask;
//
// exports.watch = function () {
//     gulp.watch('./src/styles/*.less', gulp.series ('default'));
// };
'use strict';

const gulp =require('gulp');
const less = require('gulp-less');
const path = require('path');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

function defaultTask() {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask;

exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series ('default'));
};