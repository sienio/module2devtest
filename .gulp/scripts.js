import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';

const onError = err => {
  console.log(err);
};

const dest = 'dist';

// Lint JavaScript
gulp.task('main:lint', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('main:scripts', ['main:lint'], () => {
  const bundler = browserify({
    entries: 'src/js/main.js'
  });

  bundler.transform(babelify);

  bundler.bundle()
    .on('error', onError)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dest + '/js'))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest + '/js'));
});
