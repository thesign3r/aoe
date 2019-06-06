const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const include = require('gulp-include')
const livereload = require('gulp-livereload');
const fs = require('fs');

let dirs = {
	css: 'src/*.scss',
	js: 'src/*.js',
	build: 'dist/',
	buildjs: 'dist/aoe.js',
};

gulp.task('js', () =>
	gulp.src(dirs.js)
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(concat('aoe.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dirs.build))
		.pipe(livereload())
);


gulp.task('css', function () {
	return gulp.src('src/*.scss')
		.pipe(concat('aoe.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(csso({
			sourceMap: false,
			debug: false,
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(dirs.build))
		.pipe(livereload());
});



gulp.task('build',
	gulp.series('css', 'js')
);

gulp.task('watchfile', function () {
	return gulp.src('*.html')
		.pipe(livereload());
});


const runWatchers = () => {
	gulp.watch(['*.html', '**/*.html'], gulp.series('watchfile'));
	gulp.watch(dirs.css, gulp.series('css'));
	gulp.watch(dirs.js, gulp.series('js'));
	livereload.listen();
};


gulp.task('default', function () {
	if (fs.existsSync(dirs.buildjs)) {
		console.log('🤟rock on🤟');
		runWatchers();
	} else {
		console.log('Building app');
		(gulp.series("build")());
		runWatchers();
	}
});