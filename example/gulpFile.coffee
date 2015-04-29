gulp = require 'gulp'
sass = require 'gulp-sass'
reactCss = require '../index'

config =
	src: ['../test/fixtures/**/*.scss']
	dest: '../test/expected'

gulp.task 'css', ->
	gulp.src config.src
	.pipe sass()
	.pipe reactCss()
	.pipe gulp.dest config.dest
