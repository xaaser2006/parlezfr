const gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	gcmq = require('gulp-group-css-media-queries'),
	preproc = require('gulp-less'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();
	// rename = require('gulp-rename');

const config = {
	src: './src/',
	css: {
		watch: 'precss/**/*.less',
		src: 'precss/+(style|style-ie).less',
		dest: 'css'
	},
	html: {
		src: '*.html'
	}
};

function build() {
	return gulp.src(config.src + config.css.src)
		.pipe(sourcemaps.init())
		.pipe(preproc())
		.pipe(gcmq())
		.pipe(autoprefixer({
			browsers: ['> 0.1%'],
			cascade: false
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
}

function server() {
	browserSync.init({
		server: {
			baseDir: config.src
		}
	});
}

function watch() {
	gulp.watch(config.src + config.css.watch, build);
	gulp.watch(config.src + config.html.src, browserSync.reload);
}

gulp.task('build', build);
gulp.task('watch', watch);
gulp.task('server', server);

gulp.task('default', gulp.series(build, gulp.parallel(watch, server)));