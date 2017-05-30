const gulp = require ('gulp');
const sass = require ('gulp-sass');
const babel = require ('gulp-babel');
 

 gulp.task('es6',()=>
  gulp.src('./assets/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./js/'))
);
 

    gulp.task('sass', () =>
  gulp.src('./assets/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
    );

gulp.task('default', function(){
      gulp.watch('./assets/js/*.js',['es6'])

    gulp.watch('./assets/scss/*.scss',['sass']);
});