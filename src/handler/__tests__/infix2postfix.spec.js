import uut from 'infix-to-postfix';

describe('preprocess tokens', () => {
	[
		{ input: '3 + 2 + 4', expected: '3 2 + 4 +' },
		{ input: '3 * 2 +15', expected: '3 2 * 15 +' },
		{ input: '123 + 422 * 54', expected: '123 422 + 54 *' },
	].forEach(testCase => {
		it('infix to postfix', () => {
			const result = uut(testCase.input);

			expect(result).toEqual(testCase.expected);
		});
	});
});
