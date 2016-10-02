'use strict';

module.exports = function () {
	$.gulp.task('sprite:img', function (cb) {
		var png = $.gulp.src('./source/images/icons/png/*.png')
			.pipe($.gp.spritesmith({
				imgName: 'iconspritepng.png',
				imgPath: '../img/designe/iconspritepng.png',
				cssName: '_icon-sprite-png.scss',
				padding: 20,
				algorithm: 'top-down'
			}));
		png.img.pipe($.gulp.dest('./source/images/all/designe'));
		png.css.pipe($.gulp.dest('./source/style/_common'));
		cb();
	})
};