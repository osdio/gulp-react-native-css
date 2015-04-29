# gulp-react-native-css
[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]

> react-native-css plugin for [gulp](https://github.com/wearefractal/gulp), 
inspired by [react-native-css](https://github.com/sabeurthabti/react-native-css), thanks.

## Usage

First, install `gulp-react-native-css` as a development dependency:

```shell
npm install --save-dev gulp-react-native-css
```

Then, add it to your `gulpfile`:

```
gulp = require 'gulp'
sass = require 'gulp-sass'
reactCss = require 'gulp-react-native-css'

config =
	src: ['../test/fixtures/**/*.scss']
	dest: '../test/expected'

gulp.task 'css', ->
	gulp.src config.src
	.pipe sass()
	.pipe reactCss()
	.pipe gulp.dest config.dest

```

## Example

`test.scss`:

```
#description, #ok {
	margin-Bottom: 202;
	font-size: 18;
	text-align: center;
	color: lighten(red, 10%);
	name {
		color: rgba(0, 0, 0, 0.2);
	}
}

.container {
	padding: 30;
	margin-Top: 65;
	align-items: center;
	row {
		margin-bottom: 50;
	}
}

```

After transformed, it will be:

```javascript
module.exports ={
    "description": {
        "marginBottom": 202,
        "fontSize": 18,
        "textAlign": "center",
        "color": "#ff3333"
    },
    "ok": {
        "marginBottom": 202,
        "fontSize": 18,
        "textAlign": "center",
        "color": "#ff3333"
    },
    "description name": {
        "color": "rgba(0, 0, 0, 0.2)"
    },
    "ok name": {
        "color": "rgba(0, 0, 0, 0.2)"
    },
    "container": {
        "padding": 30,
        "marginTop": 65,
        "alignItems": "center"
    },
    "container row": {
        "marginBottom": 50
    }
}

```



## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-react-native-css
[npm-image]: https://badge.fury.io/js/gulp-react-native-css.png

[travis-url]: http://travis-ci.org/soliury/gulp-react-native-css
[travis-image]: https://secure.travis-ci.org/soliury/gulp-react-native-css.png?branch=master

[coveralls-url]: https://coveralls.io/r/soliury/gulp-react-native-css
[coveralls-image]: https://coveralls.io/repos/soliury/gulp-react-native-css/badge.png

[depstat-url]: https://david-dm.org/soliury/gulp-react-native-css
[depstat-image]: https://david-dm.org/soliury/gulp-react-native-css.png
