// 各種プラグインの読み込み
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourceMaps   = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');
const config       = require('../config');

gulp.task('sassc', ['watch', 'sass']);

gulp.task('watch', function () {
    gulp.watch([config.source.sass + '**/*.scss', config.source.sass + '*.scss'], ['sass']);
});

gulp.task('sass', function () {
    gulp.src(config.source.sass + '**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
        // css出力時の設定（下記は一行にする）
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(autoPrefixer({broesers:['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8'], cascade: false, grid: true}))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(config.dest.css)
    );
});
