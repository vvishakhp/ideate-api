var gulp = require('gulp');
var p = require('child_process');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {
    "typescript": require('typescript')
});

build_server = () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
}

gulp.task('build-server-watch', () => {
    gulp.watch('./server/**/*.ts', build_server());
});

gulp.task('build-dev', gulp.series('build-server-watch'));

gulp.task('start-dev', gulp.series('build-dev'));


gulp.task('default', function () {
    console.log('Gulp build system');
});