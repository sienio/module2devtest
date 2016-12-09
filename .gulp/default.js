import gulp from 'gulp';

const defaultGulp = [
  'main:static',
  'main:styles',
  'main:scripts'
];

gulp.task('default', defaultGulp);
