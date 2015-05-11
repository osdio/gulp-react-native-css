module.exports = function (keys) {
	//console.log(value.replace(/px/g, ''));

	var values = keys[0].value.split(' ');
	var property = keys[0].key;


	var length = values.length;
	keys = [];

	if (length === 1) {
		['Top', 'Bottom', 'Right', 'Left'].forEach(function (prop) {
			keys.push({
				key: property + prop,
				value: values[0]
			});
		});
	}

	if (length === 2) {
		['Top', 'Bottom'].forEach(function (prop) {
			keys.push({
				key: property + prop,
				value: values[0]
			});
		});
		['Right', 'Left'].forEach(function (prop) {
			keys.push({
				key: property + prop,
				value: values[1]
			});
		});
	}

	if (length === 3) {
		['Left', 'Right'].forEach(function (prop) {
			keys.push({
				key: property + prop,
				value: values[1]
			});
		});
		keys.push({
			key: property + 'Top',
			value: values[0]
		});
		keys.push({
			key: property + 'Bottom',
			value: values[2]
		});
	}

	if (length === 4) {
		['Top', 'Right', 'Bottom', 'Left'].forEach(function (prop, index) {
			keys.push({
				key: property + prop,
				value: values[index]
			});
		});
	}

	return keys;
};
