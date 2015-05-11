var Handle = require('./Handle');

var format = require('./handles/format');
var margingAndPadding = require('./handles/margingAndPadding');
var final = require('./handles/final');


module.exports = function (css) {
	var handle = new Handle(css);




	handle.use(['margin', 'padding'], margingAndPadding);


	handle.use(format);

	handle.final(final);

	return handle.do();
};

