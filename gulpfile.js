'use strict';

var gulp = require('gulp'),
    source = require('vinyl-source-stream');

var files = {
    html   : ['./index.html'],
    js     : ['./js/game.js', './js/**/*'],
};

gulp.task('html', function () {
    gulp.src(files.html)
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function () {
    var jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    gulp.src(files.js[1])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('js', function () {
    var browserify = require('browserify'),
        uglify = require('gulp-uglify'),
        buffer = require('vinyl-buffer');

    var bundler = browserify({
        entries: files.js[0]
    });

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source(files.js[0]))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest('./dist/'));
    };

    return bundle();
});

gulp.task('compile', ['html']);

gulp.task('default', ['compile', 'js']);
