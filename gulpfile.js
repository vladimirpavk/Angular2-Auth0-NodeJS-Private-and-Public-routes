var gulp = require('gulp');

var gulpTs= require('gulp-typescript');
var tsProject_server = gulpTs.createProject('./server/ts/tsconfig.json');
var tsProject_client = gulpTs.createProject('./server/client/app/ts/tsconfig.json');

var gulpSm = require('gulp-sourcemaps');

var gulpClean = require('gulp-clean');

var browserSync = require('browser-sync');
  console.log("Initiating browser sync configuration...");
    browserSync.init(
        {
            proxy: "http://localhost:3036/"                       
        }
    );

var nodemon = require('gulp-nodemon');

// server (watch_server)
//*************************************************************************
// 1. When started - initial compile, clean everything in ./server/js, then compile everything from ./server/ts
// 2. Start nodemon on server/js/index.js
// watch for changes in server/ts/* - recompile if neccessary

gulp.task('clean_server_app_dir', function(){
    console.log("Cleaning server/js/*");
    return gulp.src(['./server/js/**/*.js'], {read:false})
        .pipe(gulpClean());
});

gulp.task('copy_jsons', function(){
   console.log('Copy server/ts/*.jsons...');
   return gulp.src(['./server/ts/**/*.json']).
    pipe(gulp.dest('./server/js'));    
});

gulp.task('compile_server_app', ['clean_server_app_dir'], function () {
    console.log("Compiling server/ts/*.ts");
    
    return gulp.src(['./server/ts/*.ts'])
        .pipe(gulpSm.init())
        .pipe(gulpTs(tsProject_server))
        .pipe(gulpSm.write('./'))
        .pipe(gulp.dest('./server/js/'));
});

gulp.task('watch_server_changes', ['compile_server_app', 'copy_jsons'], function(){
    return gulp.watch(['./server/ts/*.ts', './server/ts/*.json'], ['compile_server_app', 'copy_jsons']);
});

gulp.task('watch_server', ['watch_server_changes'], function(){
    console.log("Watch server");
    return nodemon({
    script: './server/js/index.js'
        })
        .on('start', function(){
            console.log("Nodemon started on index.js....");    
        })
        .on('crash', function(){
            console.log("Nodemon crashed on any reason...");
        });
});

// client (watch_client)
//**********************************************************************
// 1. Started - initial compile, clean everything in ./client/app/js, then compile everything from client/app/ts
// 2. Start watching file changes in client/app/ts
// 3. When changes happen, recompile, sync browser

gulp.task('copy_templates', function(){
   console.log('Copy html templates...');
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

gulp.task('browser_sync', function(){
    browserSync.reload();
});



gulp.task('watch_client_ts', ['compile_client_app', 'browser_sync'], function(){
    console.log("Watching for file changes ./server/client/app/ts/**/*.ts");
    return gulp.watch(['./server/client/app/**/*.ts'], ['compile_client_app', 'browser_sync']);
});

gulp.task('watch_client_html', ['copy_templates', 'browser_sync'], function(){
    console.log("Watching for file changes ./server/client/app/ts/**/*.html");
    return gulp.watch(['./server/client/**/*.html'], ['copy_templates', 'browser_sync']);
});

gulp.task('watch_client', ['watch_client_html', 'watch_client_ts', 'browser_sync']);

//******************************************************************************

gulp.task('default', ['watch_server', 'watch_client'], function() {
    console.log("Watching all...");
});
