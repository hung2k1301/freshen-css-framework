const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");

function compileSASS() {
  return gulp
    .src(`./source/scss/style.scss`)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(`./public/css`));
}

exports.compile = gulp.series(compileSASS);
exports.compileWatch = gulp.watch(
  [`./source/scss/**/*.scss`, `./source/_patterns/**/*.hbs`],
  gulp.parallel(compileSASS)
);
