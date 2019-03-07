var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');
var buffer = require('gulp-buffer');

function js() {

  var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
  var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.js');
  var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
  var slickSlider = gulp.src('node_modules/slick-carousel/slick/slick.js');
  var slickProcess = gulp.src('_includes/components/content/design/slick.js');
  var slickLarge = gulp.src('_includes/components/containers/card/large.js');
  var lazyScript = gulp.src('_includes/js/lazyLoad.js');
  var pageScroll = gulp.src('_includes/js/pageScroll.js');
  var navScript = gulp.src('_includes/components/containers/nav/nav.js');
  var typeFxScript = gulp.src('_includes/components/content/bio/typeFx.js');
  var prototypeScript = gulp.src('_includes/components/content/prototypes/prototypes.js');
  var mustache = gulp.src('node_modules/mustache/mustache.js');
  var behanceProjects = gulp.src('_includes/components/content/design/behanceProjects.js');
  var instaFeed = request('https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js')
        .pipe(source('instaFeed.js'));
  var InstaFeedscript = gulp.src('_includes/components/content/art/myInstaFeed.js');
  var gA = gulp.src('_includes/js/g-analytics.js');

  return merge(
        jquery, 
        jQeasing, 
        lazyLoad, 
        slickSlider,
        navScript,
        pageScroll,
        lazyScript, 
        typeFxScript,
        slickProcess,
        slickLarge,
        prototypeScript,
        mustache,
        behanceProjects,
        instaFeed,
        InstaFeedscript,
        gA
    )
    .pipe(buffer())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));
};

gulp.task("js", js);