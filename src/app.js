import readline from 'readline';
import handler from './handler';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log('welcome to my calculator');

const app = () => rl.on('line', input => handler(input));

export default app;
