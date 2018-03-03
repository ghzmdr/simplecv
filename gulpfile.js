const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

const startServer = require('./server.js');

gulp.task('sass', function () {

    return gulp.src(['./src/scss/landing.scss', './src/scss/curriculum.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/css'))
        .pipe(browserSync.stream());

});


gulp.task('develop', ['sass'], async function () {

    await startServer('./test-data.json');

    browserSync.init({
        proxy: 'localhost:3030/',
        browser: false
    });

    gulp.watch('./src/scss/**/*.scss', ['sass']);

})
