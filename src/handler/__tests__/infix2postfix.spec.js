import uut from '../infix2postfix';

describe('preprocess tokens', () => {
	[
		{ input: '3 + 2 + 4', expected: '3 2 + 4 +' },
		{ input: '3 * 2 +15', expected: '3 2 * 15 +' },
	].forEach(testCase => {
		it('should tokenize the string', () => {
			const result = uut(testCase.input);

			expect(result).toBe(testCase.expected);
		});
	});
});
