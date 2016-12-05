var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    pxtorem = require('postcss-pxtorem'),
    mixins = require('postcss-mixins');

gulp.task('styles', function() {
	var proccesors = [
		cssImport(),
		mixins(),
		nested(),
		cssvars(),
		autoprefixer({
			browsers: 'last 2 version'
		}),
		pxtorem({
		    propWhiteList: [],
		    replace: true
		})
	];

    return gulp.src('./app/assets/styles/styles.css')
    	.pipe(postcss(proccesors))
    	.on('error', function (errorInfo) {
    		console.log(errorInfo.toString());
    		this.emit('end');
    	})
        .pipe(gulp.dest('./app/temp/styles'));
});