function checkEven(str) {
	var chars = {};

	for (var letter of str.split('')) {
		chars[letter] = chars[letter] ? chars[letter] + 1 : 1;
	}

	for (var prop in chars) {
		if (chars.hasOwnProperty(prop)) {
			if ((chars[prop] % 2) == 1) {
				throw new Error('String received has an odd number of chars');
			}
		}
	}

	return true;
}

try {
	checkEven('stringtrins');
} catch (e) {
	console.log ("The string doesn't contain an even number of characters", e);
}

