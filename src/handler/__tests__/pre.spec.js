import uut from '../pre';

describe('preprocess tokens', () => {
	[
		{ input: ' j  =  987', expected: 'j = 987'},
        { input: 'j=987', expected: 'j = 987'},
		{ input: 'a+=c', expected: 'a = a + c'},
        { input: 'a+=120', expected: 'a = a + 120'},
        { input: '2 + ++j', expected: '2 + #2j'},
        { input: 'a+ ++h', expected: 'a + #2h'},
        { input: '2 + j++', expected: '2 + #3j'},
        { input: 'a+ h++', expected: 'a + #3h'},
        // { input: 'i = 0', expected: 'i = 0'},
        // { input: 'j = i++', expected: 'j = #3j'},
        // { input: 'x = i++ + 5', expected: 'x = #3i + 5'},

	].forEach(testCase => {
		it('should tokenize the string', () => {
			const result = uut(testCase.input)

			expect(result).toBe(testCase.expected);
		});
	});
});
