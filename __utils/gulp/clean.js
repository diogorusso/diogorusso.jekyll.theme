var gulp = require('gulp');
var clean = require('gulp-clean');

function clean() {
  return gulp.src(['assets/script.js'], {
          read: false
      })
      .pipe(clean());
};

gulp.task("clean", clean);