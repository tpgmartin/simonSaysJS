var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

gulp.task('browserify', function () {

    return gulp.src(['./src/**/*.js', '!./src/test/*.js'])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/**/*.js', ['browserify']);
});