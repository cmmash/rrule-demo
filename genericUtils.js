const dateFormatUtil = val => {
	return val.map(o => `<li>${o.toUTCString()}</li>`);
}

module.exports = {
	dateFormatUtil,
}