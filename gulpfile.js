var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require('gulp-autoprefixer');
var sass = require("gulp-sass");
var gutil = require("gulp-util");
var babel = require('gulp-babel');


// merge, compile, minify css files
gulp.task('css', function () {
	return gulp.src('src/aoe.scss')
		.pipe(concat('aoe.css'))
		.pipe(sass({
			sourceMap: true
		}))
		.on('error', function (err) {
			console.error(messages.error + err.line + ' ' + err.relativePath);
			console.log(err.formatted);
			this.emit('end');
		})
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/'));
});


// merge, compile, minify js files
gulp.task('js', function () {
	return gulp.src('src/aoe.js')
		.pipe(concat('aoe.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.on('error', function (e) {
			console.log('js error');
			console.log(e);
			this.emit('end');
		})
		.pipe(uglify().on('error', function (uglify) {
			console.log('css error');
			console.log(uglify);
			this.emit('end');
		}))
		.pipe(gulp.dest('dist'));
});



gulp.task('default', function () {
	gulp.watch('src/aoe.js', ['js']);
	gulp.watch('src/aoe.scss', ['css']);
});

gulp.task('build', function () {
	gulp.start('js');
	gulp.start('css');
});