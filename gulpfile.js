var gulp = require('gulp');
var p = require('child_process');

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");


gulp.task('build-dev', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('start-server', ()=>{
    p.spawn("node ./dist/main.js", {stdio:'inherit'});
});

gulp.task('default', ()=>{
    console.log('Please run another task');
});
