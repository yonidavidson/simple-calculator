import { getKey, setKey } from '../';

describe('Checking db manipulations', () => {
	it('should return default 0 when key does not exist', () => {
		const db = {};
		const expected = 0;

		const result = getKey('I_DONT_EXIST', db);

		expect(result).toBe(expected);
	});

	it('should return a key which was set', () => {
		const db = {};
		const key = 'I_AM_A_KEY';
		const expected = 999;
		setKey(key, expected, db);

		const result = getKey(key, db);

		expect(result).toBe(expected);
	});
});
