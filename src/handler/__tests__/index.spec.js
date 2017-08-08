import uut from '../';
import { getKey } from '../../db';

describe('main handler - integration ', () => {
	[
		{ input: 'j =  987', key: 'j', expected: 987 },
		{ input: 'k           =   988', key: 'k', expected: 988 },
	].forEach(testCase => {
		it('should put value in key when simple equality sign', () => {
			const db = {};
			const input = testCase.input;
			const key = testCase.key;
			const expected = testCase.expected;

			uut(input, db);
			const result = getKey(key, db);

			expect(result).toBe(expected);
		});
	});
});
