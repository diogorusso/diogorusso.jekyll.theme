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
    return gulp.src(['assets/js/'], {
            read: false
        })
        .pipe(clean());
  }

function jsMain() {
  var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
  var jQeasing = gulp.src('node_modules/jquery.easing/jquery.easing.js');
  var lazyLoad = gulp.src('node_modules/lazyloadxt/dist/jquery.lazyloadxt.extra.js');
  var lazyScript = gulp.src('_includes/js/lazyLoad.js');
  var pageScroll = gulp.src('_includes/js/pageScroll.js');
  var navScript = gulp.src('_includes/components/nav/nav.js');
  
  return merge(
        jquery, 
        jQeasing, 
        lazyLoad,
        lazyScript,
        navScript,
        pageScroll
    )
    .pipe(buffer())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));  
}

function jsIsotope(){

  var isotope = gulp.src('node_modules/isotope-layout/dist/isotope.pkgd.min.js');
  var imagesLoaded = gulp.src('node_modules/imagesloaded/imagesloaded.pkgd.min.js');
  var packery = gulp.src('node_modules/isotope-packery/packery-mode.pkgd.min.js');
  var isotopeScript = gulp.src('_includes/js/isotope.js');
  return merge(
    isotope,
    packery,
    imagesLoaded,
    isotopeScript
  )
  .pipe(buffer())
  .pipe(concat('isotope.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js/'));

}

function jsColorFill() {
  var colorFill = gulp.src('_includes/js/colorFill.js');
  var colorFillInit = gulp.src('_includes/js/colorFill_init.js');
  
  return merge(
    colorFill,
    colorFillInit
    )
    .pipe(buffer())
    .pipe(concat('colorFill.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));  
}

function jsAbout() {
  var slickSlider = gulp.src('node_modules/slick-carousel/slick/slick.js');
  var slickProcess = gulp.src('_includes/content/process/slick.js');
  var slickLarge = gulp.src('_includes/components/card/large.js');
  var typeFxScript = gulp.src('_includes/content/bio/typeFx.js');
  

  return merge(
        slickSlider,
        typeFxScript,
        slickProcess,
        slickLarge
    )
    .pipe(buffer())
    .pipe(concat('about.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));  
}

function jsGA() {
  var gA = gulp.src('_includes/js/ga.js');

  return merge(
        gA
    )
    .pipe(buffer())
    .pipe(concat('ga.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));  
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
    .pipe(gulp.dest('assets/js/'));  
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
    .pipe(gulp.dest('assets/js/'));  
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
    .pipe(gulp.dest('assets/js/'));  
}

function watch() {
  gulp.watch("./_includes/**/**/**/*.js", js);
}


gulp.task("watch", watch);
gulp.task("cleanJs", cleanJs);
gulp.task("jsMain", jsMain);
gulp.task("jsIsotope", jsIsotope);
gulp.task("jsColorFill",jsColorFill);
gulp.task("jsAbout", jsAbout);
gulp.task("jsGA", jsGA);
gulp.task("jsInstagram", jsInstagram);
gulp.task("jsBehance", jsBehance);
gulp.task("jsAnimation", jsAnimation);

gulp.task("scripts", gulp.series(cleanJs,jsMain,jsIsotope,jsColorFill,jsAbout,jsGA,jsInstagram,jsBehance,jsAnimation));
gulp.task("default", gulp.series(cleanJs,jsMain,jsColorFill,jsAbout,jsGA,jsInstagram,jsBehance,jsAnimation,watch));
