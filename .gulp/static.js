import gulp from 'gulp';
import del from 'del';
import plumber from 'gulp-plumber';

const onError = err => {
  console.log(err.toString());
  this.emit('end');
};

const dest = 'dist';

gulp.task('clean', cb => {
  del(['dist'], cb);
});

gulp.task('main:images', () => {
  return gulp.src('src/images/**/*')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(dest + '/images'));
});

gulp.task('main:fonts', () => {
  return gulp.src('src/fonts/**/*')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(dest + '/fonts'));
});

gulp.task('main:icons', () => {
  return gulp.src('src/icons/**/*')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(dest + '/icons'));
});

gulp.task('main:static', ['main:images', 'main:fonts', 'main:icons']);
