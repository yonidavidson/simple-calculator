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
	return mem.hasOwnProperty(x) ? mem[x] : 0;
}
