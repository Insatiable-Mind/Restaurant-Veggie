var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var csso = require("gulp-csso");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();

/* Static Server + watching scss/html files */
gulp.task("serve", ["sass"], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("sass/**/*.scss", ["sass"]).on("change", browserSync.reload);
});

/* Compile Sass into CSS & auto-inject into browsers */
gulp.task("sass", function() {
  return gulp.src("sass/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

/* Concatenate and minify CSS */
gulp.task("css:build", function() {
  gulp.watch("css/*.css").on("change", function() {
    return gulp.src("css/*.css")
      .pipe(concat("style.concat.css"))
      .pipe(csso({
        comments: false
      }))
    .pipe(gulp.dest("css_result"));
  });
});

gulp.task("default", ["serve", "css:build"]);