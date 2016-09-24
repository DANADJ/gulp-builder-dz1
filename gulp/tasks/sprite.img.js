'use strict';

module.exports = function () {
	$.gulp.task('sprite:img', function (cb) {
		var png = $.gulp.src('./source/images/icons/png/*.png')
			.pipe($.gp.spritesmith({
				imgName: 'iconspritepng.png',
				cssName: '_iconspritepng.scss'
			}));
		png.img.pipe($.gulp.dest('./source/images/all/sprites'));
		png.css.pipe($.gulp.dest('./source/style/common'));
		cb();
	})
};