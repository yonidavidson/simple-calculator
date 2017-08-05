import simple from './simple';

const h = [simple];

const getHandlers = (line, utils) => h.map(x => x(line, utils));

export default getHandlers;
