var parse = require('css-parse');
var toCamelCase = require('to-camel-case');

var parseCss = function (css) {
	var stylesheet = parse(css);

	var json = {};


	stylesheet.stylesheet.rules.forEach(function (rule) {
		if (rule.type !== 'rule') return;
		rule.selectors.forEach(function (selector) {
			selector = selector.replace(/\.|#/g, '');

			var styles = (json[selector] = json[selector] || {});

			rule.declarations.forEach(function (declaration) {
				if (declaration.type !== 'declaration') return;

				if (_isNumeric(declaration.value)) {
					declaration.value = parseInt(declaration.value);
					styles[toCamelCase(declaration.property)] = declaration.value;
				} else {
					styles[toCamelCase(declaration.property)] = declaration.value;
				}

			});
		});
	});
	return JSON.stringify(json, null, 4)
};


function _isNumeric(num) {
	return !isNaN(num)
}

module.exports = parseCss;


