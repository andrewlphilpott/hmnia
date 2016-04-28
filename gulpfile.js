var paths = {
    src: {
        dir: 'src/assets',
        scssDir: 'src/assets/scss',
        scssAll: 'src/assets/scss/**/*.scss',
        jsDir: 'src/assets/js',
        jsAll: 'src/assets/js/**/*.js',
        plugins: 'src/assets/js/vendor/**/*.js',
        imgDir: 'src/assets/img',
        imgAll: 'src/assets/img/**/*',
        twig: 'src/*.twig',
        twigAll: 'src/**/*.twig',
        blog: 'src/blog/**/*.md',
        blogDir: 'src/blog',
        rssAll: 'src/rss/**/*.xml',
        rssDir: 'src/rss'
    },
    dest: {
        dir: '',
        css: 'assets/css',
        js: 'assets/js',
        img: 'assets/img',
        templates: '',
        blog: 'blog',
        rss: 'rss'
    }
};

// Include gulp
var gulp = require('gulp');

// Include Plugins
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var imagemin = require('gulp-imagemin');
var markdown = require('twig-markdown');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var twig = require('gulp-twig');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var keys = require('./keys.json');

// Minify Images
gulp.task('imagemin', function(){
    return gulp.src(paths.src.imgAll)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest(paths.dest.img))
        .pipe(notify({message: 'Images minified'}));
});

// Compile SASS
gulp.task('sass', function(){
	return gulp.src(paths.src.scssAll)
		.pipe(sass({
            outputStyle: 'compressed'
        }).on('error', function(err){
            notify().write(err);
            this.emit('end');
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest(paths.dest.css))
        .pipe(notify({message: 'SCSS compiled'}));
});

// Concatenate & Minify Main JS
gulp.task('scripts', function() {
    return gulp.src([
            '!' + paths.src.jsDir + '/*.min.js',
            paths.src.jsDir + '/*.js'
    ])
        .pipe(uglify())
        .on('error', function(err){
            notify().write(err);
            this.emit('end');
        })
        .pipe(rename(function(path){
            path.basename += '.min';
            path.extname = '.js';
        }))
        .pipe(gulp.dest(paths.dest.js))
        .pipe(notify({message: 'Scripts minified'}));;
});

// Concatenate & Minify JS Plugins
gulp.task('plugins', function() {
    return gulp.src(paths.src.plugins)
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .on('error', function(err){
            notify().write(err);
            this.emit('end');
        })
        .pipe(rename('plugins.min.js'))
        .pipe(gulp.dest(paths.dest.js))
        .pipe(notify({message: 'Plugins minified'}));;
});

// Function to get Bitly links
var getShortLink = function(file) {
  var url = 'https://himynameisandrew.com/blog/unfixify';
  var key = keys.bitly;
  var call = 'https://api-ssl.bitly.com/v3/shorten?uri=' + url + '&access_token=' + key;
  var xhr = new XMLHttpRequest();
  xhr.open('get', call, true);
  xhr.responseType = 'json';
  xhr.onload = function(){
    var shortUrl = xhr.response.data.url;
  }
  xhr.send();
  return shortUrl;
}

// Compile Blog Posts
gulp.task('blog', function(){
    return gulp.src(paths.src.blog)
        .pipe(twig({
            data: {
                assets: '/assets'
                // shortUrl: getShortLink()
            },
            extend: markdown
        }))
        .pipe(gulp.dest(paths.dest.blog))
        .pipe(notify({message: 'Blog Posts compiled'}));
});

// Function to get blog post data and pass to Twig
var getPosts = function(dir) {
    var filesystem = require('fs');
    var results = [];
    var posts = {};

    filesystem.readdirSync(dir).forEach(function(file) {
        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if(stat && stat.isDirectory()) {
            results = results.concat(getPosts(file))
        } else {
            var postData = filesystem.readFileSync(file, 'utf8');
            postTitle = postData.match("title = '(.*)'");
            postDate = postData.match("date = '(.*)'");
            postTimeStamp = postDate[1].split('/');
            postTimeStamp = postTimeStamp.move(2, 0).join().replace(/,/g , '');
            // postTimeStamp = postTimeStamp.reverse().join().replace(/,/g , '');
            postExcerpt = postData.match("excerpt = '(.*)'");

            results.push({
                url: file,
                title: postTitle[1],
                date: postDate[1],
                timestamp: Number(postTimeStamp),
                excerpt: postExcerpt[1]
            });
        }
    });

    results.sort(function(a, b) {
        return a.timestamp - b.timestamp;
    });

    results.reverse();

    return results;
};

// Function to reorder timestamp
Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};

// Compile Twig
gulp.task('twig', function(){
    return gulp.src(paths.src.twigAll)
        .pipe(twig({
            data: {
                assets: '/assets',
                posts: getPosts(paths.src.blogDir)
            },
            extend: markdown
        }))
        .pipe(gulp.dest(paths.dest.templates))
        .pipe(notify({message: 'Twig compiled'}));
});

// Compile RSS
gulp.task('rss', function(){
    return gulp.src(paths.src.rssAll)
        .pipe(twig({
            data: {
                posts: getPosts(paths.src.blogDir)
            },
            extend: markdown
        }))
        .pipe(rename('index.xml'))
        .pipe(gulp.dest(paths.dest.rss))
        .pipe(notify({message: 'RSS compiled'}));
});

// Compile Homepage
// gulp.task('homepage', function(){
//     return gulp.src(paths.src.twig + '/index.twig')
//         .pipe(twig({
//             data: {
//                 assets: '/assets'
//             }
//         }))
//         .pipe(gulp.dest(paths.dest.templates))
//         .pipe(notify({message: 'Homepage compiled'}));
// });

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(paths.src.blog, ['blog', 'twig']);
    gulp.watch(paths.src.imgAll, ['imagemin']);
    gulp.watch(paths.src.plugins, ['plugins']);
    gulp.watch(paths.src.jsAll, ['scripts']);
    gulp.watch(paths.src.rssAll, ['rss']);
    gulp.watch(paths.src.scssAll, ['sass']);
    gulp.watch(paths.src.twigAll, ['twig']);
});

// Default Task
gulp.task('default', ['blog', 'imagemin', 'plugins', 'rss', 'sass', 'scripts', 'twig', 'watch']);
