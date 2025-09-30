const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fs = require('fs');
const path = require('path');

// Paths
const paths = {
    scss: {
        src: 'src/scss/**/*.scss',
        dest: 'assets/css/'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'assets/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'assets/images/'
    },
    html: {
        src: '*.html'
    }
};

// SCSS compilation task
function compileSCSS() {
    return gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

// JavaScript compilation task
function compileJS() {
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Images task - copy images as they are using fs
function copyImages() {
    return new Promise((resolve, reject) => {
        const srcDir = 'src/images';
        const destDir = 'assets/images';

        // Ensure destination directory exists
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        // Read all files in source directory
        fs.readdir(srcDir, (err, files) => {
            if (err) {
                reject(err);
                return;
            }

            // Copy each file
            const copyPromises = files.map(file => {
                return new Promise((resolveFile, rejectFile) => {
                    const srcPath = path.join(srcDir, file);
                    const destPath = path.join(destDir, file);

                    fs.copyFile(srcPath, destPath, (copyErr) => {
                        if (copyErr) {
                            rejectFile(copyErr);
                        } else {
                            resolveFile();
                        }
                    });
                });
            });

            Promise.all(copyPromises)
                .then(() => {
                    console.log('Images copied successfully');
                    resolve();
                })
                .catch(reject);
        });
    });
}

// Browser sync task
function serve() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('src/scss/**/*.scss', compileSCSS);
    gulp.watch(paths.js.src, compileJS);
    gulp.watch(paths.images.src, copyImages);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Build task
const build = gulp.series(compileSCSS, compileJS, copyImages);

// Default task
const dev = gulp.series(build, serve);

// Export tasks
exports.compileSCSS = compileSCSS;
exports.compileJS = compileJS;
exports.copyImages = copyImages;
exports.serve = serve;
exports.build = build;
exports.dev = dev;
exports.default = dev;