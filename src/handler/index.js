import getHandlers from './handlers';

const handler = (line, sessionCloser) =>
	getHandlers(line, { sessionCloser }).forEach(x => x());

export default handler;
