var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function(){
    var processors = [
        autoprefixer
    ];

    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch:styles', function(){
    gulp.watch('./css/**/*.scss', ['styles']);
});
