// 各種プラグインの読み込み
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['watch', 'sass']);

gulp.task('watch', function () {
	gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
	gulp.src('./css/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
// 	css出力時の設定（下記は一行にする）
// 		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write({includeContent: false}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(autoprefixer({broesers:['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8'], cascade: false, grid: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css/'));
});
