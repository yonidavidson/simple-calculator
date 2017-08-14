import uut from '../';

describe('preprocess tokens', () => {
	[
		{ mem: {}, input: 'i = 0', expected: { i: 0 } },
		{ mem: { i: 0 }, input: 'j = ++i', expected: { i: 1, j: 1 } },
	].forEach(testCase => {
		it('should calculate correct value of param', () => {
			const result = uut(testCase.input, testCase.mem);

			expect(result).toEqual(testCase.expected);
		});
	});
});

/* i = 0
j = ++i
x = i++ + 5
y = 5 + 3 * 10
i +=y
i = 37, j = 1,x =6 ,y = 35 */
