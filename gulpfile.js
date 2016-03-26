// Gulp Packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
//var sourcemaps = require('gulp-sourcemaps');


// Config Object - paths
// ./components/scss/**/*.scss
var config = {
    nodeDir: './node_modules',
    sassPath: 'components/scss',
    destPath: 'components/dist',
    materialPath: './node_modules/bootstrap-material-design/scss/bootstrap.scss',
    bootstrapPath: './node_modules/bootstrap/scss/'
}


// default task and log a message
gulp.task('default', function(){
  return gutil.log('Gulp is running')
});


gulp.task('buildCSS', function () {
  return gulp.src('components/scss/**/*.scss')
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest('./components/dist'));
});

gulp.task('watch', function () {
  gulp.watch('components/scss/**/*.scss', ['buildCSS']);
});

// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: true,
//       open: true
//     }));
// });

gulp.task('default', ['watch'], function() {
    return gutil.log('Watch is running')
});
