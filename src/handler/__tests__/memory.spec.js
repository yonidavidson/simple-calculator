import uut from '../memory';

describe('preprocess tokens', () => {
	[
		{ mem: {}, input: 'a + c', expected: { text: '0 + 0', mem: {} } },
		{
			mem: { c: 2 },
			input: 'a + c',
			expected: { text: '0 + 2', mem: { c: 2 } },
		},
		{
			mem: { j: 3 },
			input: '2 + #{++L}j',
			expected: { text: '2 + 4', mem: { j: 4 } },
		},
		{ mem:{j:3}, input: '2 + #{++R}j', expected: {text:'2 + 4' ,mem:{j:3}}},
	].forEach(testCase => {
		it('should update memory and return only numbers and primitives', () => {
			const result = uut(testCase.input, testCase.mem);

			expect(result).toEqual(testCase.expected);
		});
	});
});
