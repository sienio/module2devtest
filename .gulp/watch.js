import gulp from 'gulp';

gulp.task('watch', () => {
  // static files
  gulp.watch('src/images/**/*', ['main:images']);
  gulp.watch('src/fonts/**/*', ['main:fonts']);
  gulp.watch('src/icons/**/*', ['main:icons']);
  // scripts
  gulp.watch('src/js/**/*.js', ['main:scripts']);
  // styles
  gulp.watch('src/styles/**/*.scss', ['main:styles']);
  gulp.watch('src/components/Header/**/*.scss', ['main:styles']);
});
