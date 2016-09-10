var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            port: 8001,
            fallback: 'index.html',
            open: true
        }));
});

gulp.task('default', ['webserver']);