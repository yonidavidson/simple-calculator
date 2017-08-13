import uut from '../pre';

describe('preprocess tokens', () => {
	[
		{ input: 'j =  987', expected: 'j = 987'},
		{ input: 'a += 120', expected: 'a = a + 120'},
	].forEach(testCase => {
		it('should tokenize the string', () => {
			const result = uut(testCase.input)

			expect(result).toBe(testCase.expected);
		});
	});
});
