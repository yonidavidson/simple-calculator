import uut from 'reverse-polish-notation';

describe('preprocess tokens', () => {
	[
		{ input: '51 1 2 + 4 * + 3 -', expected: 60 },
		{ input: '3 4 5 * -', expected: -17 },
	].forEach(testCase => {
		it('infix to postfix', () => {
			const result = uut(testCase.input);

			expect(result).toBe(testCase.expected);
		});
	});
});
