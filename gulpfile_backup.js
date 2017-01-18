var gulp = require('gulp');

var gulpTs= require('gulp-typescript');
var tsProject_server = gulpTs.createProject('./server/ts/tsconfig.json');
var tsProject_client = gulpTs.createProject('./server/client/app/ts/tsconfig.json');
var gulpSm = require('gulp-sourcemaps');
var gulpClean = require('gulp-clean');



// client (watch_client)
//**********************************************************************
// 1. Started - initial compile, clean everything in ./client/app/js, then compile everything from client/app/ts
// 2. Start watching file changes in client/app/ts
// 3. When changes happen, recompile, sync browser

gulp.task('copy_templates', function(){
   return gulp.src(['./server/client/app/ts/**/*.html']).
    pipe(gulp.dest('./server/client/app/js'));    
});

gulp.task('compile_client_app', function(){
  

    console.log('Compiling client application...');
    return gulp.src(['./server/client/app/ts/**/*.ts'])
        .pipe(gulpSm.init())
        .pipe(gulpTs(tsProject_client))
        .pipe(gulpSm.write('./'))
        .pipe(gulp.dest('./server/client/app/js/'));    
});


gulp.task('watch_client_ts', ['compile_client_app'], function(){
    return gulp.watch(['./server/client/app/ts/**/*.ts'], ['compile_client_app']);
});

gulp.task('watch_client_html', ['copy_templates'], function(){
    console.log("Watching /client/server/app/ts/**/*.html");
    return gulp.watch(['./server/client/app/ts/**/*.html'], ['copy_templates']);
})

gulp.task('default', ['watch_client_html', 'watch_client_ts']);

//******************************************************************************
