const infix2postfix = function(expression) {
	var pfixString = '';
	var infixStack = [];

	var precedence = function(operator) {
		switch (operator) {
			case '^':
				return 3;
			case '*':
			case '/':
				return 2;
			case '+':
			case '-':
				return 1;
			default:
				return 0;
		}
	};

	for (var i = 0; i < expression.length; i++) {
		var c = expression.charAt(i);
		if (!isNaN(parseInt(c))) {
			pfixString += c;
		} else if (c === '+' || c === '-' || c === '*' || c === '/' || c === '^') {
			while (
				c != '^' &&
				infixStack.length > 0 &&
				precedence(c) <= precedence(infixStack[infixStack.length - 1])
			) {
				pfixString += infixStack.pop();
			}
			infixStack.push(c);
		}
	}
	while (infixStack.length > 0) {
		pfixString += infixStack.pop();
	}

	return pfixString;
};

export default infix2postfix;
