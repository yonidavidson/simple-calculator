import readline from 'readline';

export default (handler, getMessage) => () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const sessionCloser = () => rl.close();

	rl.on('line', line => {
		handler(sessionCloser, () => line);
	});
};
