import simple from './simple';

const handlers = (sessionCloser, line) => simple(sessionCloser, line)();

export default handlers;
