import session from './session';
import handler from './handler';

console.log('welcome to my calculator');

const app = session(handler);

export default app;
