import userInterface from './userInterface';
import handler from './handlers';

console.log('welcome to my calculator');

const app = userInterface(handler);

export default app;
