import uut from '../';
import { getKey } from '../../db';

describe('main handler - integration ', () => {

	
	it('should put value in key when simple equality sign', () => {
		const db = {};
		const expected = 987;
		const input = 'j =  987';

		uut(input, db);
		const result = getKey('j', db);

		expect(result).toBe(expected);
	});
});
