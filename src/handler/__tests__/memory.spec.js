import uut from '../memory';

describe('preprocess tokens', () => {
	[
		{ mem:{c:2}, input: 'a + c', expected: {text:'0 + 2' ,mem:{c:2}}}
        // { mem:{j:3}, input: '2 + #2j', expected: {text:'2 + 4' ,mem{j:4}},
        // { mem:{j:3}, input: '2 + #3j', expected: {text:'2 + 4' ,mem{j:3}},
	].forEach(testCase => {
		it('should update memory and return only numbers and primitives', () => {
			const result = uut(testCase.input, testCase.mem)

			expect(result).toBe(testCase.expected);
		});
	});
});
