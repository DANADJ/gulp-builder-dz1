'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/all/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/images/icons/png/*.*', $.gulp.series('sprite:img'));
    $.gulp.watch('./source/images/icons/svg/*.*', $.gulp.series('sprite:svg'));
  });
};
