const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const sassLint = require('gulp-sass-lint');
const htmlPartial = require('gulp-html-partial');
const browserSync = require('browser-sync').create(); 

// Compile SCSS
function compile_css() {
    return gulp.src('build/scss/**/*.scss')
    .pipe(sourcemaps.init()) 
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([ autoprefixer(), cssnano()])) 
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Compile JS
function compile_js() {
    return gulp.src('build/js/scripts/**/*.js')
    .pipe(sourcemaps.init()) 
    .pipe(concat('main.js')) 
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify()) 
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// Compile HTML
function compile_html() {
  return gulp.src('build/html/**/*.html')
  .pipe(htmlPartial({
    basePath: 'build/html/partials/'
  }))
  .pipe(gulp.dest('dist/static'))
  .pipe(browserSync.stream());
}

// SCSS LINT
function sass_lint() {
  return gulp.src('build/scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};

// Watch for changes, refresh browser
function watch() {
  compile_css();
  compile_js();
  compile_html();
    browserSync.init({
      server: {
        baseDir: "./dist",
        index: "static/index.html"
      }
    });
    gulp.watch('build/scss/**/*.scss', compile_css);
    gulp.watch('build/js/**/*.js').on('change', compile_js);
    gulp.watch('build/html/**/*.html').on('change', compile_html);
}

exports.compile_css = compile_css;
exports.compile_js = compile_js;
exports.compile_html = compile_html;
exports.sass_lint = sass_lint;
exports.watch = watch;