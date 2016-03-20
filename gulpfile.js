// Gulp Packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
//var sourcemaps = require('gulp-sourcemaps');

// default task and log a message
gulp.task('default', function(){
  return gutil.log('Gulp is running')
});


gulp.task('buildCSS', function () {
  return gulp.src('./components/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./components/dist'));
});

gulp.task('watch', function () {
  gulp.watch('./components/scss/**/*.scss', ['buildCSS']);
});

// gulp.task('clean', function(cb) {
//   del(['build/*'], cb);
// });

// gulp.task('copy', function() {
//   return gulp.src('client/www/index.html')
//     .pipe(gulp.dest('build'));
// });

// gulp.task('browserify', function() {
//   return gulp.src('client/index.js')
//     .pipe(browserify({transform: 'reactify'}))
//     .pipe(concat('app.js'))
//     .pipe(gulp.dest('build'));
// });

// gulp.task('build', function(cb) {
//   runSequence('buildCSS');
// });

gulp.task('default', ['watch'], function() {
    return gutil.log('Watch is running')
});
