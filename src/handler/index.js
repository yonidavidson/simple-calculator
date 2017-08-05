import getHandlers from './handlers';

const handler = (line, utils) =>
	getHandlers(line, utils).forEach(x => x());

export default handler;
