import getHandlers from './handlers';

const handler = (sessionCloser, line) =>
	getHandlers().forEach(x => {
		x(sessionCloser, line)();
	});

export default handler;
