module.exports = function (styles, keys) {
	keys.forEach(function (ob) {
		styles[ob.key] = ob.value;
	});
};

