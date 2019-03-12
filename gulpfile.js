var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', done => {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
        done();
});

gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', gulp.series('styles'));
});