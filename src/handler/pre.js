const pre = input => {
	let response = input;
	response = response.replace(/\s\+{2}([a-z])/gi, ' #{++L}$1');
	response = response.replace(/([a-z])\+{2}/gi, ' #{++R}$1');
	response = response.replace(/([a-z])\+\=/gi, '$1 = $1 + ');
	response = response.replace(/([\s\da-z])([\+\*])([^\+\*])/gi, '$1 $2 $3 ');
	response = response.replace(/([\d\sa-zA-Z])(\=)/gi, '$1 $2 ');
	response = response.replace(/\s\s+/gi, ' ');
	return response.trim();
};

export default pre;
