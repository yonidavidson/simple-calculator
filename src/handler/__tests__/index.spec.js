import uut from '../';

describe('preprocess tokens', () => {
	[
		{ mem: {}, input: 'i = 0', expected: { i: 0 } },
		{ mem: { i: 0 }, input: 'j = ++i', expected: { i: 1, j: 1 } },
		{
			mem: { i: 1, j: 1 },
			input: 'x = i++ + 5',
			expected: { i: 2, j: 1, x: 6 },
		},
		{
			mem: { i: 2, j: 1, x: 6 },
			input: 'y = 5 + 3 * 10',
			expected: { i: 2, j: 1, x: 6, y: 35 }
		},
		{
			mem: { i: 2, j: 1, x: 6, y: 35 },
			input: 'i+=y',
			expected: { i: 37, j: 1, x: 6, y: 35 }
		},
	].forEach(testCase => {
		it('should calculate correct value of param', () => {
			const result = uut(testCase.input, testCase.mem);

			expect(result).toEqual(testCase.expected);
		});
	});
});