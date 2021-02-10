var concat = require('gulp-concat'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    jscs = require('gulp-jscs'),
    mocha = require('gulp-mocha'),
    webpack = require('webpack-stream');

gulp.task('default', ['clean', 'eslint', 'jscs', 'build', 'license', 'tests', 'docs']);

gulp.task('clean', function() {
    del.sync('docs', {force: true});

    return del.sync('build', {force: true});
});

gulp.task('jscs', function() {
    return gulp.src(['src/**/*.js', 'test/**/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
});

gulp.task('eslint', function() {
    return gulp.src('./src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('tests', ['build'], function() {
    return gulp.src('test/**/*.js')
        .pipe(mocha());
});

gulp.task('build', ['clean'], function() {
    return webpack(require('./webpack.config.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('license', ['build'], function() {
    var banner = ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''].join('\n');

    return gulp.src('./build/imagePreloader.min.js')
        .pipe(header(banner, {pkg: require('./package.json')}))
        .pipe(gulp.dest('./build/'));
});

gulp.task('docs', ['build'], function() {
    return gulp.src('src/*.js')
        .pipe(concat('README.md'))
        .pipe(jsdoc2md())
        .on('error', function(err) {
            gutil.log('jsdoc2md failed:', err.message)
        })
        .pipe(gulp.dest('docs'))
});
