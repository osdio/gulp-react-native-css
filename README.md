(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-react-native-css
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> react-native-css plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-react-native-css` as a development dependency:

```shell
npm install --save-dev gulp-react-native-css
```

Then, add it to your `gulpfile.js`:

```javascript
var react-native-css = require("gulp-react-native-css");

gulp.src("./src/*.ext")
	.pipe(react-native-css({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### react-native-css(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


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
