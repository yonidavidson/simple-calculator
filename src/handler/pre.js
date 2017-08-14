const pre = input => {
	let response = input;
	response = response.replace(/\s\++([a-zA-Z])/g, ' #{++L}$1');
	response = response.replace(/([a-z,A-Z])\+{2}/g, ' #{++R}$1');
	response = response.replace(/([a-z,A-Z])\+\=/g, '$1 = $1 + ');
	response = response.replace(
		/([\s,\d,a-z,A-Z])([\+,\*])([\s,\d,a-z,A-Z])/g,
		'$1 $2 $3 ',
	);
	response = response.replace(/([\d\sa-zA-Z])(\=)/g, '$1 $2 ');
	response = response.replace(/\s\s+/g, ' ');
	return response.trim();
};

export default pre;
