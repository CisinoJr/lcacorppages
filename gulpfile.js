var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Task default gulp
gulp.task('default', ['sass', 'sass:watch', 'watch']);

// Task gulp SASS
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.sass').pipe(sass({outputStyle:'compressed'}).on('error', sass.logError)).pipe(gulp.dest('./css'));
})

gulp.task('sass:watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
})

// Task gulp WATCH
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
})