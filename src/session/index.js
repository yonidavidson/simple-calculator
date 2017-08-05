import connect from './connect';

const session = handler => () => connect(handler);
export default session;
