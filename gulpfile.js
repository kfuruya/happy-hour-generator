"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

/*----------------------------------------------
  Compile & autoprefix CSS
-----------------------------------------------*/
gulp.task("css", function() {
  return gulp.src("css/style.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(autoprefixer({browsers: ["> 1%", "last 3 versions", "Firefox ESR"]}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css/"));
});

/*----------------------------------------------
  Concat & uglify JS
-----------------------------------------------*/
gulp.task("js", function() {
  return gulp.src([
      'js/themes.js',
      'js/restaurants.js',
      'js/drinks.js',
      'js/playlists.js',
      'js/script.js',
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("js"));
});

/*----------------------------------------------
  Watch
-----------------------------------------------*/
gulp.task("watch", function() {
  gulp.watch("css/**/*.scss", ["css"]);
  gulp.watch("js/**/*.js", ["js"]);
});
