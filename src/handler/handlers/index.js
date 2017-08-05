import exitSession from './exitSession';
import endSession from './endSession';

const h = [exitSession, endSession];

const getHandlers = (line, utils) => h.map(x => x(line, utils));

export default getHandlers;
