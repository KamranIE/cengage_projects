var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var logger = require('gulp-logger');
var livereload = require('gulp-livereload');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./config/webpack.config');
var path = require("path");
var historyFallback = require("connect-history-api-fallback");
var browsersync = require("browser-sync").create();

var siteConfig = {
  paths: {
    scss: {
      src: './src/scss/**/*.scss',
      dest: path.resolve(__dirname, 'dist/assets/css')
    },
    minify: {
      src: './dist/assets/css/*.css',
      dest: path.resolve(__dirname, 'dist/assets/css')
    },
    ts: {
      src: './src/**/*.+(js|jsx|ts|tsx)',
      dest: path.resolve(__dirname, 'dist/assets/js')
    },
    images: {
      src: './public/assets/images/*.*',
      dest: path.resolve(__dirname, 'dist/assets/images')
    },
    templates: {
      src: './src/templates/*.+(ico|txt|html|config)',
      dest: path.resolve(__dirname, 'dist/')
    },
    watchThese: {
      scss: './src/scss/**/*.scss',
      code: './src/**/*.+(js|jsx|ts|tsx)'
    }
  }
}

gulp.task('sass', function () {
  return gulp.src(siteConfig.paths.scss.src)
    .pipe(logger({
      before: 'scss compilation started...',
      after: 'scss compilation completed',
      showChange: true
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(siteConfig.paths.scss.dest))
    .pipe(browsersync.stream());
});

gulp.task('cssminify', done => {
  gulp.src(siteConfig.paths.minify.src)
    .pipe(logger({
      before: 'scss minification started...',
      after: 'scss minification completed',
      showChange: true
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(siteConfig.paths.minify.dest))
    .pipe(browsersync.stream());
  done();
});

gulp.task('images', function () {
  return gulp.src(siteConfig.paths.images.src)
    .pipe(
      logger({
        before: 'Copying images started...',
        after: 'Copying images completed',
        showChange: true
      })
    )
    .pipe(gulp.dest(siteConfig.paths.images.dest))
    .pipe(browsersync.stream());
});

gulp.task('templates', function () {
  return gulp.src(siteConfig.paths.templates.src)
    .pipe(
      logger({
        before: 'Copying templates started...',
        after: 'Copying templates completed',
        showChange: true
      })
    )
    .pipe(gulp.dest(siteConfig.paths.templates.dest));
});

gulp.task('tsxCompile', function () {
  return gulp.src(siteConfig.paths.ts.src)
    .pipe(logger({
      before: 'ts/tsx compilation started...',
      after: 'ts/tsx compilation completed',
      showChange: true
    }))
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(siteConfig.paths.ts.dest));
});

gulp.task('watch-only', function () {
  browsersync.init({
    /* server: {
      baseDir: "./dist",
      middleware: [historyFallback()]
    } */
    proxy: "cengage"
  });
  gulp.watch(siteConfig.paths.watchThese.scss, gulp.series('sass', 'cssminify'));
  gulp.watch(siteConfig.paths.watchThese.code, gulp.series('tsxCompile')).on('change', browsersync.reload);
});

gulp.task('start', gulp.series('sass', 'cssminify', 'tsxCompile', 'images', 'templates', 'watch-only'));
gulp.task('default', gulp.series('sass', 'cssminify', 'tsxCompile', 'images', 'templates'));
