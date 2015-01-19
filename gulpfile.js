var gulp = require('gulp');
var uncss = require('gulp-uncss');
gulp.task('default', function() {
    gulp.src('site.css')
        .pipe(uncss({
            html: ['/views/pizza.html']
        }))
        .pipe(gulp.dest('views/css/tidy.css'));
});


gulp.task('default', function() {
  // place code for your default task here

});
