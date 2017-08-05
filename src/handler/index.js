import getHandlers from './handlers';

const handler = (sessionCloser, line) =>
	getHandlers(line, { sessionCloser }).forEach(x => x());

export default handler;
