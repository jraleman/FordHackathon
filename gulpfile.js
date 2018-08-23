var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');

gulp.task('default', function () {
    var plugins = [
        uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }),
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});
