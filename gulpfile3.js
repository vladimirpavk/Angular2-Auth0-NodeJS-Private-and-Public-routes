var gulp = require('gulp');

gulp.task('copy_templates', function(){
   return gulp.src(['./server/client/app/ts/**/*.html']).
    pipe(gulp.dest('./server/client/app/js'));    
});

gulp.task('watch_client_html', function(){
    console.log("Watching ./server/client/app/ts/**/*.html");
    return gulp.watch(['./server/client/app/ts/**/*.html'], ['copy_templates']);
})