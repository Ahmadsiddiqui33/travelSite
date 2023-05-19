var gulp        = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel  = require('gulp-babel');


// Compile sass into CSS
gulp.task('sass', function(done) {
    return gulp.src("src/assets/src/scss/style.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest("src/assets/dist/css"));
        done();
});

// Compile scripts into compiled single file
gulp.task('scripts', function(done) {
    return gulp.src([
        "src/assets/src/scripts/custom.js"
        ])
        .pipe(concat('scripts.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest("src/assets/dist/js"));
        done();
});

// Watching scss files
gulp.task('serve', gulp.series('sass', 'scripts', function() {
    gulp.watch("src/assets/src/**/*.scss", gulp.series('sass'));
    gulp.watch("src/assets/src/**/*.js", gulp.series('scripts'));
}));

gulp.task('watch', gulp.series('serve'));