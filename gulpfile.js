var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');
var buffer = require('gulp-buffer');
var clean = require('gulp-clean');

function cleanJs() {
    return gulp.src(['assets/script.js'], {
            read: false
        })
        .pipe(clean());
  }

function js() {
  var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
  var slickSlider = gulp.src('node_modules/slick-carousel/slick/slick.js');
  var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.extra.js');
  var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
  var slickProcess = gulp.src('_includes/content/process/slick.js');
  var slickLarge = gulp.src('_includes/components/card/large.js');
  var lazyScript = gulp.src('_includes/js/lazyLoad.js');
  var pageScroll = gulp.src('_includes/js/pageScroll.js');
  var navScript = gulp.src('_includes/components/nav/nav.js');
  var typeFxScript = gulp.src('_includes/content/bio/typeFx.js');
  var prototypeScript = gulp.src('_includes/content/prototypes/prototypes.js');
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
        gA
    )
    .pipe(buffer())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));  
}

function jsAnimation(){
  var rellax = gulp.src('node_modules/rellax/rellax.js');
  var rellaxInit = gulp.src('_includes/js/rellax.js');
  var aos = gulp.src('node_modules/aos/dist/aos.js');
  var aosInit = gulp.src('_includes/js/aos.js');

  return merge(
    rellax,
    rellaxInit,
    aos,
    aosInit
  )
  .pipe(buffer())
    .pipe(concat('animation.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));  
}

function jsInstagram() {
  var instaFeed = request('https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js')
        .pipe(source('instaFeed.js'));
  var InstaFeedscript = gulp.src('_includes/api/instagram/myInstaFeed.js');

  return merge(
        instaFeed,
        InstaFeedscript
    )
    .pipe(buffer())
    .pipe(concat('instagram.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));  
}

function jsBehance() {
  var mustache = gulp.src('node_modules/mustache/mustache.js');
  var behanceProjects = gulp.src('_includes/api/behance/behanceProjects.js');
  return merge(
        mustache,
        behanceProjects
    )
    .pipe(buffer())
    .pipe(concat('behance.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));  
}

function watch() {
  gulp.watch("./_includes/**/**/**/*.js", js);
}


gulp.task("watch", watch);
gulp.task("cleanJs", cleanJs);
gulp.task("js", js);
gulp.task("jsInstagram", jsInstagram);
gulp.task("jsBehance", jsBehance);
gulp.task("jsAnimation", jsAnimation);

gulp.task("scripts", gulp.series(cleanJs,js,jsInstagram,jsBehance,jsAnimation));

gulp.task("default", gulp.series(cleanJs,js,jsInstagram,jsBehance,jsAnimation,watch));
