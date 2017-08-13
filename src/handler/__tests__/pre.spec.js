import uut from '../pre';

describe('preprocess tokens', () => {
	[
		{ input: ' j  =  987', expected: 'j = 987'},
        { input: 'j=987', expected: 'j = 987'},
		{ input: 'a  +=   120', expected: 'a #1 120'},
        { input: 'a+=120', expected: 'a #1 120'},
        { input: '2 + ++j', expected: '2 + #2j'},
        { input: 'a+ ++h', expected: 'a + #2h'}
	].forEach(testCase => {
		it('should tokenize the string', () => {
			const result = uut(testCase.input)

			expect(result).toBe(testCase.expected);
		});
	});
});
