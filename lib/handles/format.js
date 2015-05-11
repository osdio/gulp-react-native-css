var toCamelCase = require('to-camel-case');

var type = function (object) {
	return {}.toString.call(object).match(/\[object (.*?)\]/)[1].toLowerCase();
};

module.exports = function (keys) {
	keys.forEach(function (key, index, arr) {
		var value = key.value;
		if (type(key.value) == 'string') {
			value = key.value.replace(/px|em/g, '');
			if (_isNumeric(value)) {
				arr[index].value = parseInt(value);
			}
		}
		arr[index].key = toCamelCase(arr[index].key);
	});
};


function _isNumeric(num) {
	return !isNaN(num)
}
