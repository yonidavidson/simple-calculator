import exitSession from '../exitSession';

describe('Testing handlers', () => {
	it('Match exit handler then exit', () => {
		const utilsMock = { sessionCloser: jest.fn() };
		const uut = exitSession(() => 'exit', utilsMock);

		uut();

		expect(utilsMock.sessionCloser).toBeCalled();
	});
});
