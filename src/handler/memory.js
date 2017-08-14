const memory = (input, mem) => {
	let text = input;
	text = text.split(' ');
	text = text.map(x => {
		if (isNumeric(x) || isOperator(x)) {
			return x;
		}
		return handleVar(x, mem);
	});
	text = text.join(' ');
	return { text, mem };
};

export default memory;

function isOperator(str) {
	return str.length === 1 && str.match(/[\+\-\*\/]/);
}

function isNumeric(num) {
	return !isNaN(num);
}

function handleVar(x, mem) {
	const varName = x.match(/(#\{.*\})/) ? x.split('}')[1] : x;
	const reservedKey = x.match(/(#\{.*\})/) ? x.split(varName)[0] : '';
	return handleResevedKey(reservedKey, varName, mem);
}

function handleResevedKey(reservedKey, varName, mem) {
	if (reservedKey === '#{++L}') {
		const currentVal = mem.hasOwnProperty(varName) ? mem[varName] : 0;
		mem[varName] = currentVal + 1;
		return mem[varName];
	}
	return mem.hasOwnProperty(varName) ? mem[varName] : 0;

}
